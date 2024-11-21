import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header className='py-3'>
                <Navbar></Navbar>
            </header>
           <main className='min-h-screen'> 
            <Outlet></Outlet></main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;