import React from 'react';
import {  FaMapMarkerAlt, FaLeaf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const { AdventureTitle , Image , EcoFriendlyFeatures , BookingAvailability , Location , AdventureCost , ID } = data
    return (
        <div id='1234' className="flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        {/* Image Section */}
        <div className="relative">
          <img
            src={Image}
            alt="Forest Tour"
            className="w-full h-56 object-cover"
          />
          <div className="absolute top-4 left-4 bg-slate-300 text-black text-sm px-3 py-1 rounded-md">
           {BookingAvailability}
          </div>
          <div className="absolute top-4 right-4 bg-slate-300 text-black text-sm px-3 py-1 rounded-md font-bold">
           {AdventureCost} tk
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">
           {AdventureTitle}
          </h2>
          <div className="mt-2 flex items-center text-gray-600 text-sm">
            <FaMapMarkerAlt className="mr-2 text-green-600" />
            <span>{Location}</span>
          </div>

          <div className="mt-2">
            <div className="flex items-center text-gray-800 text-sm font-semibold">
              <FaLeaf className="mr-2 text-green-600" />
              <span>Eco-Friendly Features:</span>
            </div>
            <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
              {EcoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
         

          {/* Button Section */}
          <Link to={`/details/${ID}`} className="mt-4 btn text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] px-4 py-2 w-full rounded-md hover:text-black">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  
    );
};

export default Card;