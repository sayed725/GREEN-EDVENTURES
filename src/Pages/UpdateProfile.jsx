import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const UpdateProfile = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <h2 className='text-4xl text-center'>Update profile</h2>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;