import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
          <nav>
          <Navbar></Navbar>
          </nav>
          <main>
          <Banner></Banner>
          </main>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;