import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Services from "../Components/Services/Services";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Home from "../Components/Home/Home";
import Details from './../Components/Details/Details';
import MyReviews from './../Components/MyReviews/MyReviews';
import Blog from "../Components/Blog/Blog";
import AddService from "../Components/AddService/AddService";
import PrivateRoutes from './../PrivateRoutes/PrivateRoutes';
import ContactForm from "../Components/ContactForm/ContactForm";
import AboutUs from "../Components/AboutUs/AboutUs";

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
                loader: ({params}) => fetch(`https://assignment-eleven-server-r1xu.vercel.app/services/${params.id}`)
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
            {
                path: '/reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
                
            },
            // {
            //     path: '/reviews/:id',
            //     element: <MyReviews></MyReviews>,
            //     loader: ({params}) => fetch(`http://localhost:3000/reviews/${params.id}`),
            // },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/addservice',
                element: <AddService></AddService>,
            },
            {
                path: '/contact',
                element: <ContactForm></ContactForm>,
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>,
            },
        ]
    }
   
   
])

export default router