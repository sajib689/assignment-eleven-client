import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Services from "../Components/Services/Services";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Home from "../Components/Home/Home";
import Details from './../Components/Details/Details';

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
           
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
   
   
])

export default router