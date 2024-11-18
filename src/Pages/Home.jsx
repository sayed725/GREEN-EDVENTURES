import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
          <nav>
          <Navbar></Navbar>
          </nav>
          <main>
          <h2 className='text-4xl text-center font-bold'>This is Home</h2>
          </main>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;