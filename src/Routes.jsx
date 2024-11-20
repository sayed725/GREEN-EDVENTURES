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
import ShowCard from "./Components/ShowCard";
import UserProfile from "./Pages/UserProfile";
import UpdateProfile from "./Pages/UpdateProfile";
import Error from "./Pages/Error";
import ForgetPassword from "./Pages/ForgetPassword";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
       {
        path: "/",
        element: <Home></Home>,
        children:[
          {
            path:"/",
            element:<ShowCard></ShowCard>,
            loader: ()=> fetch ('/tours.json'),
          }
        ]
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
        path: "/details/:id",
        element: <Details></Details>,
        loader: ()=> fetch ('/tours.json'),
       },
       {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
       },
       {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
       },
       {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
       }

      //  {
      //   path:'*',
      //   element: <h1 className='text-5xl text-center'>Error</h1>
      // }
      ]
    },
  ]);

  export { routes }