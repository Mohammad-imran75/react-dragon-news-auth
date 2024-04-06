
import { createBrowserRouter } from "react-router-dom";

import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/shared/About";
import Carrer from "../Pages/shared/Carrer";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import News from "../Pages/News";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('/news.json')
            },{
                path:'/aNews/:id',
                element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:'/about',
                element:<About/>
            },{
                path:'/carrer',
                element:<Carrer/>
            }
            ,{
                path:'/login',
                element:<Login/>
            }
            ,{
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default router;