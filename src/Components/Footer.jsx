import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaTumblr, FaLinkedin, FaPinterest, FaVimeo } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f2d3c] text-gray-300 py-10 mt-[100px] rounded-md">
      <div className="container mx-auto px-6 gap-5 md:flex md:justify-between">
        {/* About Section */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-yellow-500 text-lg font-bold mb-4">Wanderers</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna lacus porta, augue eget sagittis.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhone className="text-yellow-500" />
              <span>1-677-124-44227</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span>Eighth Avenue 487, New York</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-500" />
              <span>wanderers@qodeinteractive.com</span>
            </li>
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Latest Posts</h3>
          <ul className="text-sm space-y-4">
            <li>
              <h4 className="font-semibold">
                Traveling – It Leaves You Speechless, Then Turns You Into A Storyteller
              </h4>
              <span className="text-gray-500">February 21, 2018</span>
            </li>
            <li>
              <h4 className="font-semibold">
                A Journey Is Always Best Measured In New Friends, Rather Than Miles
              </h4>
              <span className="text-gray-500">February 21, 2018</span>
            </li>
          </ul>
        </div>

        {/* Twitter Feed */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Twitter Feed</h3>
          <p className="text-sm">
            For all the latest news and updates,<br /> follow us on Twitter:{" "}
            <span className="text-yellow-500">@QodeInteractive</span>
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mb-6 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Instagram Feed</h3>
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
          <FaFacebook className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
          <FaInstagram className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
          <FaTumblr className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
          <FaLinkedin className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
          <FaPinterest className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
          <FaVimeo className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
        </div>
        
        <p className="text-sm text-gray-600 mt-4">
          © 2018 Qode Interactive, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
