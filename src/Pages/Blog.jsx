import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation()
   

    useEffect(()=>{

        if(location.pathname == "/blog"){
            document.title = "Blog-GreenEdventures"
        }
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center'>blog</h2>
            <Footer></Footer>
        </div>
    );
};

export default Blog;