import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import ContactSection from '../Components/ContactSection';
import TeamSection from '../Components/TeamSection';

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
            <div>
                <TeamSection></TeamSection>
            </div>
            <div className='my-10'>
           <ContactSection></ContactSection>
            </div>
              <Footer></Footer>
        </div>
    );
};

export default About;