import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';
import ShowCard from '../Components/ShowCard';
import { Outlet, useLocation } from 'react-router-dom';
import Question from '../Components/Question';

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
         <div className='py-[50px] border-2 border-red-700'>
         <Feature></Feature>
         </div>
         <div className='py-[50px] border-2 border-red-700'>
           <Outlet></Outlet>
         </div>
         <div className='py-[50px] border-2 border-red-700'>
            <Question></Question>
         </div>
         </div>
          </main>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;