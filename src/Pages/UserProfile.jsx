import React, { useContext, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation } from 'react-router-dom';


const UserProfile = () => {

    const location = useLocation()
   

    useEffect(()=>{

        if(location.pathname == "/userprofile"){
            document.title = "My Profile-GreenEdventures"
        }
    },[])


    const { user } = useContext(AuthContext)
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className=" md:w-3/4 lg:w-1/3 mx-auto py-3">


            <div className="flex items-center justify-center bg-gradient-to-b from-[#184E68] to-[#57CA85] py-[100px] rounded-md gap-5">
      <div className="bg-white rounded-xl shadow-lg p-6">
       
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-700 flex justify-center items-center space-x-2">
            <span className='text-green-600 animate__slideInRight animate__animated'>Welcome <br />{user && user.displayName}</span>
          </div>
        </div>
        {/* Profile Image */}
        <div className="mt-6 flex justify-center">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-green-600">
            <img
              src={user && user?.photoURL}
              alt="User"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* User Information */}
        <div className="mt-4 text-center flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-green-600 animate__slideInLeft animate__animated">{user && user.displayName}</h2>
          <p className="text-green-600">{user && user?.email}</p>
        </div>
        {/* Update Button */}
        <div className="mt-6 flex justify-center">
          <Link to="/updateprofile" className=" w-full btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">
            Update Profile
          </Link>
        </div>
      </div>
    </div>




            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UserProfile;