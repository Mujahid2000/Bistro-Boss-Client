import { Outlet, useLocation } from 'react-router-dom';
import MyFooter from '../NavBarFooter/Footer';
import NavBar from '../NavBarFooter/NavBar';



const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup')
    return (
        <div>
           {
            noHeaderFooter ||  <NavBar></NavBar>
           }
            <Outlet></Outlet>
            {
                noHeaderFooter || <MyFooter></MyFooter>
            }
        </div>
    );
};

export default Main;