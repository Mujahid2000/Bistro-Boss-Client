
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";
import UseAuth from "../Hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    
    if(loading){
     return <Spinner color="pink" aria-label="Pink spinner example" />
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;