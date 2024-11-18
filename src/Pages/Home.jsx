import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';

const Home = () => {
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
         </div>
          </main>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;