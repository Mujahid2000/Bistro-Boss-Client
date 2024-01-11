
import { Avatar } from "flowbite-react";
import UseCarts from "../Hooks/UseCarts";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";



const AdminCart = () => {
    const [cart, refetch] = UseCarts();
    const axiosSecure = UseAxiosSecure();
    // const totalPrice = cart.reduce((total, item)=> total + item.price, 0);

    function calculateTotalPrice(cart) {
        
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        totalPrice = item.price + totalPrice;
        }
    
    return totalPrice;
    }
    
    const totalMyPrice = calculateTotalPrice(cart);
    const totalNumber = parseFloat(totalMyPrice);
   

    const handleDelete = (id) =>{
        console.log('delete success', id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/cart/${id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
                }
                refetch()
            })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-between max-w-7xl mx-auto mt-5">
                <h2>TOTAL ORDERS: {cart.length}</h2>
                <h2>TOTAL PRICE: {totalNumber.toFixed(2)}</h2>
                <Link to='/dashboard/payment'>
                <button
                disabled={!cart.length}
                type="button"
                className=" rounded bg-green-500  px-5 py-2   uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                PAY
                </button>
                </Link>
                </div>
                <div className="container mx-auto my-10 ml-2">
                <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-slate-400">
                    <tr>
                    <th className="py-2 px-4 border-b text-center">Serial Number</th>
                    <th className="py-2 px-4 border-b text-center">Item Image</th>
                    <th className="py-2 px-4 border-b text-center">Item Name</th>
                    <th className="py-2 px-4 border-b text-center">Price</th>
                    <th className="py-2 px-4 border-b text-center">Action Button</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => 
                            <tr key={item._id}>
                    <td className="py-2 px-4 border-b text-center">{index+1}</td>
                    <td className="py-2 px-4 border-b justify-center">
                    <Avatar img={item.image} size="lg"/>
                    </td>
                    <td className="py-2 px-4 border-b text-center">{item.name}</td>
                    <td className="py-2 px-4 border-b text-center">${item.price}</td>
                    <td className="py-2 px-4 border-b text-center">
                    <button onClick={() =>handleDelete(item._id)}
                    type="button"
                    className=" rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                    <MdDelete className="w-5 h-5" />
                    </button>
                    </td>
                    </tr>
                            )
                    }
                   
                   
                </tbody>
                </table>
            </div>
            <div></div>

        </div>
    );
};

export default AdminCart;