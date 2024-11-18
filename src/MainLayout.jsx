import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;