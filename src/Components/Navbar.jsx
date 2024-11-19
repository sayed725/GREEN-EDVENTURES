import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const { name, user , logOut } = useContext(AuthContext)



    const links = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/about'>About Us</NavLink></li>
     <li><NavLink to='/blog'>Blog</NavLink></li>

     <li><NavLink to='/userprofile'>My Profile</NavLink></li>
     <li><NavLink to='/updateprofile'>UpdateProfile</NavLink></li>

    </>



    return (
        <div className="navbar bg-base-100 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
          <img className='h-[50px] w-[150px]' src="/GreenEdventures-Main-Logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>

        
        <div className="navbar-end">
        <div className="login flex gap-2 items-center">
          <div className=" ">
          {user && user?.email && user?.photoURL ? (
            // <div className="flex gap-2 relative">
            //   <img className="w-[60px] rounded-full" src={user?.photoURL} alt="" />

            //   <div className="absolute top-2 left-12 text-black text-sm font-medium py-1 px-2 rounded shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
            //   {user.displayName}
            //   </div>
            // </div>

            <div className="relative group flex items-center">
     
      <img
        src={user?.photoURL}
        alt="User Profile"
        className="w-[50px] h-[50px] rounded-full border-2 border-green-600 cursor-pointer"
      />
     
      <div className="absolute top-0 right-[60px] bg-black text-white text-sm font-medium py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 z-50 transition-opacity duration-200">
        {user?.displayName}
      </div>
    </div>



          ) : (
            <img className="w-10" src='' alt="" />
          )}
          </div>

          {
            user && user?.email ? 


           <div>
             <button onClick={logOut} className="btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">Log-out</button>  
           </div>


               : <Link to='/auth/login'  className="btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">Login</Link>
          }
         
        </div>
        </div>
      </div>
    );
};

export default Navbar;