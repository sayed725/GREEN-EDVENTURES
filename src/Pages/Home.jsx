import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import Feature from '../Components/Feature';

import { Outlet, useLocation } from 'react-router-dom';

import Popular from '../Components/Popular';
import TestimonialSection from '../Components/TestimonialSection';
import BannerNew from '../Components/BannerNew';

const Home = () => {

    const location = useLocation()
   
    useEffect(()=>{

        if(location.pathname == "/"){
            document.title = "Home-GreenEdventures"
        }
    },[])




    return (
        <div>
          <nav>
          <Navbar></Navbar>
          </nav>
          <main>
         <div className='main-section'>
         <BannerNew></BannerNew>
         <div className='py-5 sm:py-[50px] '>
         <Feature></Feature>
         </div>
         <div className='lg:py-[50px] '>
           <Outlet></Outlet>
         </div>
         <div className='py-[50px]'>
           <TestimonialSection></TestimonialSection>
         </div>
         <div className='pb-[50px]'>
            <Popular></Popular>
         </div>
         </div>
          </main>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;