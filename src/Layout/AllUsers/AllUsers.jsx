import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();
   
    const {refetch, data: users =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })


    const handleDeleteUser =(user) =>{
        console.log('delete success', user);
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
            
            axiosSecure.delete(`/users/${user._id}`)
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

    const handleUpdateRole = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            refetch()
        })
    }

    return (
        <div>
        <div >
        <div className="flex justify-evenly my-4 ">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
        </div>
        <div className="container mx-auto my-10 ml-2">
<table className="min-w-full bg-white border border-gray-300">
    <thead className="bg-slate-400">
    <tr>
        <th className="py-2 px-4 border-b text-center">SL No.</th>
        <th className="py-2 px-4 border-b text-center">Name</th>
        <th className="py-2 px-4 border-b text-center">Email</th>
        <th className="py-2 px-4 border-b text-center">Role</th>
        <th className="py-2 px-4 border-b text-center">Action</th>
    </tr>
    </thead>
    <tbody>
    {
        users.map((user, index) => 
            <tr key={user._id} className={index % 2 === 0 ? 'bg-blue-200' : 'bg-white'}>
            <td className="py-2 px-4 border-b border-x text-center">{index+1}</td>
            <td className="py-2 px-4 border-b border-x text-center"> {user.name}</td>
            <td className="py-2 px-4 border-b border-x text-center">{user.email}</td>
            <td className="py-2 px-4 border-b border-x text-center">
            {
                user.role === 'admin' ? "Admin" :
                <button onClick={() =>handleUpdateRole(user)}><FaUserCheck className="w-5 h-6 mx-auto justify-center" /></button>
            }

            </td>
            <td className="py-2 px-4 border-b text-center">
                <button onClick={() =>handleDeleteUser(user)} className="rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
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
    </div>
    );
};

export default AllUsers;