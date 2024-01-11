import { SlCalender } from "react-icons/sl";
import { NavLink, Outlet } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { TbBrandBooking } from "react-icons/tb";
import { TbStarsFilled } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import UseCarts from "../Hooks/UseCarts";
import { MdEmail } from "react-icons/md";
import UseAdmin from "../Hooks/UseAdmin";
const Dashboard = () => {
    const [cart] = UseCarts();
    const [isAdmin] = UseAdmin();


    return (
        <div className="flex">
            <div className="w-64 min-h-screen px-6 pt-2 bg-orange-400">
                <h1 className="text-2xl font-bold font-serif text-center">BISTRO BOSS </h1>
                <h3 className="text-xl font-serif tracking-widest text-center">Restaurant</h3>
            <ul className=" grid grid-cols-1 gap-3  text-white mt-3">
                {
                    isAdmin?
                    <>
                    <li >
                <NavLink to={'/dashboard/adminHome'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <FaHome />Admin Home
                </NavLink>
                </li>

                <li >
                <NavLink to={'/dashboard/addItems'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <FaUtensils />Add Items
                </NavLink>
                </li>
                
                <li >
                <NavLink to={'/dashboard/manageItems'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <FaList /> Manage Items
                </NavLink>
                </li>
                <li >
                <NavLink to={'/dashboard/bookings'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <FaBook />Manage Bookings
                </NavLink>
                </li>
                <li >
                <NavLink to={'/dashboard/users'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <FaUsers /> All Users
                </NavLink>
                </li>
                    </>
                    :
                    <>
                    <li >
                <NavLink to={'/dashboard/userHome'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <FaHome />User Home
                </NavLink>
                </li>

                <li >
                <NavLink to={'/dashboard/reservation'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <SlCalender />Reservation
                </NavLink>
                </li>
                
                <li >
                <NavLink to={'/dashboard/adminCart'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <LuShoppingCart /> My Cart <span className=" font-bold">({cart.length})</span>
                </NavLink>
                </li>
                <li >
                <NavLink to={'/dashboard/review'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <TbStarsFilled />Customer Review
                </NavLink>
                </li>
                <li >
                <NavLink to={'/dashboard/paymentHistory'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <TbBrandBooking /> Payment History
                </NavLink>
                </li>
                    </>
                }
        
                <div className="divider"><hr /></div>
                
                <li >
                <NavLink to={'/'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <FaHome />Home
                </NavLink>
                </li>

                <li >
                <NavLink to={'/order/salad'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <IoSearch /> Food Menu
                </NavLink>
                </li>

                <li >
                <NavLink to={'/order/contact'} className="flex text-white  leading-normal shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg rounded-lg p-3 bg-purple-700 items-center gap-5">
                <MdEmail />Contact
                </NavLink>
                </li>
            </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;