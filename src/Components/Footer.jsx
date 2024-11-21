import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTumblr, FaLinkedin, FaPinterest, FaVimeo } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#0f2d3c] text-gray-300 py-10  lg:mt-[70px] rounded-md">
      <div className="container mx-auto px-6 gap-5 md:flex md:justify-between">
        {/* About Section */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-green-600 text-lg font-bold mb-4">GreenEdventures</h3>
          <p className="text-sm">
          ExploreEcoAdventures is your gateway to sustainable travel, offering detailed guides on eco-friendly adventures like mountain treks and ocean dives.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhone className="text-green-600" />
              <span>1-677-124-44227</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span>Eighth Avenue 487, New York</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-green-600" />
              <span>wanderers@qodeinteractive.com</span>
            </li>
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4 text-green-600">Latest Posts</h3>
          <ul className="text-sm space-y-4">
            <li>
              <h4 className="font-semibold">
                Traveling – It Leaves You Speechless, Then Turns You Into A Storyteller
              </h4>
              <span className="text-gray-500">October 21, 2024</span>
            </li>
            <li>
              <h4 className="font-semibold">
                A Journey Is Always Best Measured In New Friends, Rather Than Miles
              </h4>
              <span className="text-gray-500">September 12, 2024</span>
            </li>
          </ul>
        </div>

        {/* Twitter Feed */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4 text-green-600">Twitter Feed</h3>
          <p className="text-sm">
            For all the latest news and updates,<br /> follow us on Twitter:{" "}
            <span className="text-green-600">@QodeInteractive</span>
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4 text-green-600">Instagram Feed</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-600 h-16 w-full"></div>
            <div className="bg-gray-600 h-16 w-full"></div>
            <div className="bg-gray-600 h-16 w-full"></div>
            <div className="bg-gray-600 h-16 w-full"></div>
            <div className="bg-gray-600 h-16 w-full"></div>
            <div className="bg-gray-600 h-16 w-full"></div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 text-center">
        <div className="flex justify-center space-x-4">
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaFacebook className="text-green-600 hover:text-green-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaInstagram className="text-green-600 hover:text-green-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaTumblr className="text-green-600 hover:text-green-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaLinkedin className="text-green-600 hover:text-green-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaPinterest className="text-green-600 hover:text-green-400 cursor-pointer" /></a>
        <a href="https://www.facebook.com/abu.ssayed.khan.2024" target="_blank"> <FaVimeo className="text-green-600 hover:text-green-400 cursor-pointer" /></a>
        </div>
        
        <p className="text-sm text-white mt-4 opacity-70">
          © 2018 Qode Interactive, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
