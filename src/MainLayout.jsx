import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const MainLayout = () => {
    return (
        <div className='lg:w-11/12 mx-auto bg-gray-50'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;