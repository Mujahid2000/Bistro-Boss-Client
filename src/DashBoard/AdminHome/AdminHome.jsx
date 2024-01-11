import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminHome = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const {data: stats} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const {data: chartData = []} = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    
    const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    const pieChartsData = chartData.map(data =>{
        return {name: data.category, value: data.total}
    })
    return (
        <div>
            <h2 className="text-3xl text-center"><span>Hi! Welcome </span>
            {
                user?.displayName ? user.displayName : 'Back'
            }
            </h2>
            <div className="flex justify-evenly p-4 bg-gray-100 shadow mx-auto max-w-7xl">

            <div className="p-4 bg-white rounded-lg shadow w-64 h-40 mx-auto">
                <div className="text-secondary">
                <FaMoneyCheckAlt className="w-8 h-8"/>
                </div>
                <div className="font-bold mb-1 text-xl">Revenue</div>
                <div className="text-xl">${stats?.revenue.toFixed(2)}</div>
                <div>Jan 1st - Feb 1st</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow w-64 h-40  mx-auto" >
                <div className="text-secondary">
                <FaUsers className="w-8 h-8"/>
                </div>
                <div className="font-bold mb-1 text-xl">Users</div>
                <div className="text-xl">{stats?.user}</div>
                <div>↗︎ 400 (22%)</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow w-64 h-40  mx-auto" >
                <div className="text-secondary">
                <MdProductionQuantityLimits className="w-8 h-8"/>
                </div>
                <div className="font-bold mb-1 text-xl">Products</div>
                <div className="text-xl">{stats?.menuItems}</div>
                <div>↗︎ 400 (22%)</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow w-64 h-40  mx-auto">
                <div className="text-secondary">
                <TbTruckDelivery className="w-8 h-8"/>
                </div>
                <div className="font-bold mb-1 text-xl">Orders</div>
                <div className="text-xl">{stats?.orders}</div>
                <div>↘︎ 90 (14%)</div>
            </div>

            </div>
            <div className="flex max-w-7xl mx-auto justify-center items-center">
                <div>
                <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                </BarChart>
                </div>
                <div>
                <PieChart width={400} height={400}>
                <Pie
                    data={pieChartsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {pieChartsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend></Legend>
                </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;