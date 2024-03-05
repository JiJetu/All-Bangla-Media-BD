import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import LogIn from "../pages/login/LogIn";
import Register from "../pages/login/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("news.json")
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;