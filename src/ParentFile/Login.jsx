import { Button } from "keep-react";
import { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn} = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const from = location.state?.from?.pathname || '/';
    console.log('state in the location ', location.state);
    

    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: "Good job!",
                text: "Successfully Login!",
                icon: "success"
            });
            navigate(from , {replace: true});
        })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }

    return (
    <div className="bg-slate-500 gap-40 items-center p-24 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl  border-slate-500 shadow-left">
        <Helmet>
            <title>Sign In</title>
        </Helmet>
        <div className="">
            <img src={'https://i.ibb.co/mDDR5q5/authentication2.png'} alt="" />
        </div>
        <div >
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#" onSubmit={handleLogin}>
        <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Sign in </h5>
        <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
        </label>
        <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@gmail.com"
            required
        />
        </div>
        <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
        </label>
        <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
        />
        <label htmlFor="password" className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white">
            <LoadCanvasTemplate />
        </label>
        </div>
        
        <div>
        <input
            type="text"
            name="captcha"
            id="captcha"
            placeholder="Type The Captcha"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            ref={captchaRef}
        />
        <div className="mt-3"><Button size="xs" type="outlinePrimary" onClick={handleValidateCaptcha}>validate</Button></div>
        </div>
        <div className="flex items-start">
        <div className="flex items-start">
            <div className="flex items-center h-5">
            <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                
            />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
            </label>
        </div>
        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
            Forgot Your Password?
        </a>
        </div>
        <button
        disabled={disable}
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center" >
        New here? <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create a New Account</a>
        </div>
    </form>
        <p className="text-center text-sm font-medium text-gray-500">Or sign in with</p>
    <SocialLogin></SocialLogin>
    </div>
        </div>
    </div>
    );
};

export default Login;
