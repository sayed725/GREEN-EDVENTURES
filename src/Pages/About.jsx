import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import Question from '../Components/Question';

const About = () => {
    const location = useLocation()
   

    useEffect(()=>{

        if(location.pathname == "/about"){
            document.title = "About Us-GreenEdventures"
        }
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10'>
            <Question></Question>
            </div>
              <Footer></Footer>
        </div>
    );
};

export default About;