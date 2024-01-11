import { Avatar } from "flowbite-react";
import useMenu from "../Hooks/UseMenu";
import SectionTitle from "../Shared/SectionTitle";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = UseAxiosSecure();
    

    const handleDeleteItem = (item) =>{
        console.log('delete successfully', item);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if(res.data.deletedCount < 0){
                    refetch();
            Swal.fire({
            title: "Deleted!",
        text: "Your file has been deleted.",
            icon: "success"
            });
                } 
            }
        });
    }

const handleUpdateItem = (item) =>{
    console.log('updated successfully', item);
}
    
    return (
        <div>
            <SectionTitle heading={'MANAGE ALL ITEMS'} subHeading={'---Hurry Up!---'}></SectionTitle>
        <div className="ml-2">
        <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-slate-500">
        <tr>
        <th className="py-2 px-4 border-b">Sl no.</th>
        <th className="py-2 px-4 border-b">Item Image</th>
        <th className="py-2 px-4 border-b">Item Name</th>
        <th className="py-2 px-4 border-b">Price</th>
        <th className="py-2 px-4 border-b">Update</th>
        <th className="py-2 px-4 border-b">Delete</th>
        </tr>
        </thead>
        <tbody>
        {/* Item Row */}
        {
        menu.map((item, index) => 
            <tr key={item._id}>
            <td className="py-2 px-4 border-b border-x text-center">{index+1}</td>
            <td className="py-2 px-4 border-b border-x">
            <Avatar img={item.image} size="lg" />
            </td>
            <td className="py-2 px-4 border-b text-center border-x">{item.name}</td>
            <td className="py-2 px-4 border-b text-center border-x">${item.price}</td>
            <td className="py-2 px-4 border-b text-center border-x">
        <Link to={`/dashboard/updateItem/${item._id}`}>
        <button className="rounded bg-blue-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-blue-500 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]" onClick={() =>handleUpdateItem(item)}><LiaEditSolid className="w-4 h-5"/></button>
        </Link>
        </td>
        <td className="py-2 px-4 border-b text-center">
        <button onClick={() =>handleDeleteItem(item)} className="rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                <MdDelete className="w-4 h-5"></MdDelete>
            </button>
        </td>
        </tr>    
        )
        }
        </tbody>
    </table>
        </div>
        </div>
    );
};

export default ManageItems;