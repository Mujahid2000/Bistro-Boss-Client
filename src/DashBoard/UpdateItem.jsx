import { Button } from "flowbite-react";
import SectionTitle from "../Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, _id, recipe, category, price} = useLoaderData();
    console.log(name);
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = UseAxiosSecure();
    const axiosPublic = UseAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload imageBB
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers:{
            'content-type': 'multipart/form-data'
        }    
        });
        if(res.data.success){
            const menuItem ={
                name:data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
                
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if(menuRes.data.modifiedCount > 0){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updated Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };
    


    return (
        <div>
            <div>
            <SectionTitle heading='add an item' subHeading="what's new?"></SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Recipe Name</label>
                <input {...register("name", {required: true})} defaultValue={name} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recipe Name" name="name"/>
            </div>
            <div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" defaultValue={category}>Category</label>
            <select defaultValue='category' {...register("category" , {required: true})} id="" className="bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled defaultValue='category'>Choose a Category</option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
            </select>

        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Price</label>
            <input {...register("price" , {required: true})} defaultValue={ price} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" name="price"/>
        </div>
        </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe Details*</label>
        <textarea {...register("recipe" , {required: true})} defaultValue={recipe} id="message" rows="4" className="block p-2.5 h-32 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recipe Details..." name="recipe"></textarea>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
        <input {...register("image" , {required: true})} className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" name="image"/>

        <Button className=" rounded-lg  mt-4" type="submit">Update Menu Item <FaUtensils className="ml-2"></FaUtensils></Button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateItem;