import React from 'react';

import { Outlet } from 'react-router-dom';

import 'animate.css';

const MainLayout = () => {
    return (
        <div className='lg:w-11/12 mx-auto bg-gray-50'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;