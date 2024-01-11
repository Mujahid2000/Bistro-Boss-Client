import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const PaymentHistory = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
            <div>
                <h2 className="text-3xl max-w-7xl mx-auto mb-3 mt-3">Total Payments: {payments.length}</h2>
                <div className="container mx-auto max-w-7xl">
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
            <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Sl. No</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Transaction Id</th>
                <th className="py-2 px-4 border">Total Price</th>
                <th className="py-2 px-4 border">Payment Date</th>
                <th className="py-2 px-4 border">Status</th>
            </tr>
            </thead>
            <tbody>
            {
                payments.map((payment, index) => 
                    <tr className="hover:bg-gray-100" key={payment._id}>
                    <td className="py-2 px-4 border">{index +1}</td>
                    <td className="py-2 px-4 border">{payment.email}</td>
                    <td className="py-2 px-4 border">{payment.transactionId}</td>
                    <td className="py-2 px-4 border">${payment.price.toFixed(2)}</td>
                    <td className="py-2 px-4 border">{payment.data}</td>
                    <td className="py-2 px-4 border">{payment.status}</td>
                </tr>    
                )
            }
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default PaymentHistory;