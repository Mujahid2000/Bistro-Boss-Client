import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn().then((result) => {
        console.log(result.user);
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo)
        .then((res) => {
            console.log(res.data);
            navigate('/')
        });
        });
    };

    return (
        <div>
        <div className="flex gap-10 justify-center mt-6">
            <button className="inline-block  bg-neutral-100 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg">
            <BsFacebook className=" bg-white rounded-full w-6 h-6"></BsFacebook>
            </button>
            <button className="inline-block  bg-neutral-100 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg">
            <BsGoogle
                onClick={handleGoogleSignIn}
                className=" rounded-full bg-white w-6 h-6"
            ></BsGoogle>
            </button>
            <button className="inline-block  bg-neutral-100 rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg">
            <BsGithub className=" bg-white rounded-full w-6 h-6"></BsGithub>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;
