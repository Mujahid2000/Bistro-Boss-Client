import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './ParentFile/Main';
import Home from './ParentFile/Home';
import Menu from './ParentFile/Menu';
import Order from './ParentFile/Order';
import Login from './ParentFile/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import SignUp from './ParentFile/SignUp';
import PrivateRoute from './AuthProvider/PrivateRoute'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard';
import AdminCart from './DashBoard/AdminCart';
import AllUsers from './Layout/AllUsers/AllUsers';
import AddItems from './DashBoard/AddItems';
import AdminRoute from './AuthProvider/AdminRoute'
import ManageItems from './DashBoard/ManageItems';
import UpdateItem from './DashBoard/UpdateItem';
import Payment from './DashBoard/Payment/Payment';
import PaymentHistory from './DashBoard/PaymentHostory/PaymentHistory';
import UserHome from './DashBoard/UserHome/UserHome';
import AdminHome from './DashBoard/AdminHome/AdminHome';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal user routes
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path:'adminCart',
        element: <AdminCart></AdminCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

        // only admin route
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`https://bistro-boss-server-lovat-mu.vercel.app/menu/${params.id}`)
      },
      {
      path: 'users',
      element: <AllUsers></AllUsers>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className='max-w-[1600px] mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)
