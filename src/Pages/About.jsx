import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
              <h2 className='text-4xl text-center font-bold'>This is About Page</h2>
              <h2> Live without limits</h2>
              <Footer></Footer>
        </div>
    );
};

export default About;