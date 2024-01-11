import { Spinner } from "flowbite-react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";


const AdminRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const [isAdmin , isAdminLoading] = UseAdmin();
    const location =  useLocation();

    if(loading || isAdminLoading){
        return <Spinner color="pink" aria-label="Pink spinner example" />
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;