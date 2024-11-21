import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import ShowCard from '../Components/ShowCard';
import { Outlet, useLocation } from 'react-router-dom';
import Question from '../Components/Question';
import Popular from '../Components/Popular';
import TestimonialSection from '../Components/TestimonialSection';

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
         <Banner></Banner>
         <div className='py-5 sm:py-[50px] '>
         <Feature></Feature>
         </div>
         <div className='lg:py-[50px] '>
           <Outlet></Outlet>
         </div>
         <div className='py-[50px]'>
           <TestimonialSection></TestimonialSection>
         </div>
         <div className=''>
            <Popular></Popular>
         </div>
         </div>
          </main>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;