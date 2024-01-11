
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";


const SignUp = () => {
    const {createUser, profileUpdate} = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const {register,reset, handleSubmit,formState: { errors },} = useForm ();
    
    const onSubmit= (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            profileUpdate(data.name, data.photo)
            .then(() => {
                console.log("user profile info updated");
                // create user entry in the database
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        console.log('user added to the users');
                        Swal.fire({
                            title: "Good job!",
                            text: "Successfully Sign Up!",
                            icon: "success"
                        });
                        navigate('/');
                        reset();
                    }
                })
                
            }).catch(error => console.log(error))
        })
    }


    return (
        <div className="bg-slate-500 gap-40 items-center p-40 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl  border-slate-500 shadow-left">
        <Helmet>
            <title>Sign Up</title>
        </Helmet>
        <div >
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Sign Up </h5>
        <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Name
        </label>
        <input
            {...register("name", { required: true, maxLength: 20 }) }
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Your Name"
            
        />
        {errors.name && <span>name is required</span>}
        </div>
        <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Photo URL   
        </label>
        <input
            {...register("photo", { required: true }) }
            type="text"
            name="photo"
            id="photo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Photo URL"
            
        />
        {errors.photo && <span>photo link is required</span>}
        </div>
        <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
        </label>
        <input
            {...register("email", {required:true})}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            
        />
        {errors.email && <span>name is required</span>}
        </div>
        <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
        </label>
        <input
            {...register("password",{required: true, minLength:6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            
        />
        {errors.password?.type === 'required'  && <p>password is required</p>}
        {errors.password?.type === "minlength" && (<p role="alert">password must be 6 characters</p>)}
        {errors.password?.type === "maxlength" && (<p role="alert">password max be 20 characters</p>)}
        {errors.password?.type === "pattern" && (<p role="alert">password must be one uppercase one lowercase, one number and one special character</p>)}
        </div>
        
        <div className="flex items-start">
        <div className="flex items-start">
            <div className="flex items-center h-5">
            <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
            />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
            </label>
        </div>
        
        </div>
        <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        Sign Up to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center" >
        Already Have a Account? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</a>
        </div>
    </form>
        <SocialLogin></SocialLogin>
    </div>
        </div>
        <div className="">
            <img src={'https://i.ibb.co/mDDR5q5/authentication2.png'} alt="" />
        </div>
        
    </div>
    );
};

export default SignUp;