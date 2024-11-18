import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import About from "./Pages/About";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./Pages/LogIn";
import Blog from "./Pages/Blog";
import Details from "./Pages/Details";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
       {
        path: "/",
        element: <Home></Home>,
       },
       {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path:'/auth/register',
                element: <Register></Register>
            },
        ]
       },
       {
        path: "/about",
        element: <About></About>,
       },
       {
        path: "/blog",
        element: <Blog></Blog>,
       },
       {
        path: "/details",
        element: <Details></Details>,
       },

       {
        path:'*',
        element: <h1 className='text-5xl text-center'>Error</h1>
      }
      ]
    },
  ]);

  export { routes }