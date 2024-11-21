import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div className="bg-gray-50 py-10">

        <h2 className="text-4xl font-semibold text-center pb-10 animate__flash animate__animated">Contact Us</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Call Us Card */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <div className="bg-teal-100 text-teal-500 p-4 rounded-full mb-4 animate__shakeX animate__animated">
            <FiPhone size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">CALL US ON</h3>
          <p className="text-gray-600">(888) 123-456789</p>
          <p className="text-gray-600">(888) 123-456789</p>
        </div>

        {/* Email Us Card */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <div className="bg-teal-100 text-teal-500 p-4 rounded-full mb-4 animate__shakeX animate__animated">
            <FiMail size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">EMAIL US AT</h3>
          <p className="text-gray-600">ssayed72533@gmail.com</p>
          <p className="text-gray-600">ssayed725332@gmail.com</p>
        </div>

        {/* Location Card */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 ">
          <div className="bg-teal-100 text-teal-500 p-4 rounded-full mb-4 animate__shakeX animate__animated">
            <FiMapPin size={24} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">LOCATION</h3>
          <p className="text-gray-600 text-center">
            Green-EdVenture, Gulshan 2/10, Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
