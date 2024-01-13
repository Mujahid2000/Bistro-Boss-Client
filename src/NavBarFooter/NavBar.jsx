import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button } from "keep-react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import UseCarts from "../Hooks/UseCarts";


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = UseCarts();
  const handleLogOUt = () =>{
    logOut().then().catch(error=>{console.error(error)})
  }
    return (


        <div>
            <Navbar fluid rounded className="fixed z-10 bg-opacity-30 bg-[#15151580] w-[84.1%]">
      <Navbar.Brand href="">
        
        <h2 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white"> BISTRO BOSS <br /> <span className="ml-2">Restaurant</span></h2>
      </Navbar.Brand>
      <div className="flex gap-5 md:order-2 bg-opacity-25">
        
      <Link to={'dashboard/adminCart'}>
      <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  dark:focus:ring-blue-800">
      <AiOutlineShoppingCart className="w-5 h-5"></AiOutlineShoppingCart>
      <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-purple-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{cart.length}</div>
      </button>
      </Link>

        {
          user?(
            <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={user.photoURL} rounded />
            }
          >
            <Dropdown.Header className="">
              <span className="block text-sm">{user.displayName}</span>
              <span className="block truncate text-sm font-medium">{user.email}</span>
            </Dropdown.Header >
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOUt}>Sign out</Dropdown.Item>
          </Dropdown>
          ):
          <Link to={'/login'}><Button>Sign in</Button></Link>
        }
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-white">
        <Navbar.Link href="/" active className="text-white">
          HOME
        </Navbar.Link>
        <Navbar.Link href="/menu" className="text-white">OUR MENU</Navbar.Link>
        <Navbar.Link href="/order/salad" className="text-white">ORDER FOOD</Navbar.Link>
        <Navbar.Link href="#" className="text-white">SECRET</Navbar.Link>
        
        <Navbar.Link href="#" className="text-white">OUR SHOP</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default NavBar;