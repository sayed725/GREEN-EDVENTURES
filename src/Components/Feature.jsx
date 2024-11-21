import React from 'react';
import { LuBedDouble } from "react-icons/lu";
import { FaHotel, FaUtensils, FaCar, FaWallet, FaCompass, FaGlobe } from "react-icons/fa";

const Feature = () => {
    return (
        <div className=''>
           <div className='flex flex-col gap-5'>    
           <p className='text-sm text-center'>Our Tour Packages</p>
           <h2 className='text-4xl text-center font-semibold'>Inclusive Features of Our Tour Packages</h2>
           </div>
           {/* features card  */}
           <div className='grid grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12 mt-10'> 
            <div className="flex flex-col items-center justify-center bg-white rounded-lg  p-6 text-center">
            <div className="text-green-500 bg-slate-200 hover:bg-green-500 hover:text-black mb-4 border-2 p-6 rounded-full"><LuBedDouble size={40}></LuBedDouble></div>
            <h2 className="text-2xl font-semibold hover:text-green-600">Luxury Hotels</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg  p-6 text-center">
            <div className="text-green-500 bg-slate-200 hover:bg-green-500 hover:text-black mb-4 border-2 p-6 rounded-full"><FaUtensils size={40} /></div>
            <h2 className="text-2xl font-semibold hover:text-green-600">Best Menus</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg  p-6 text-center">
            <div className="text-green-500 bg-slate-200 hover:bg-green-500 hover:text-black mb-4 border-2 p-6 rounded-full"> <FaCar size={40} /></div>
            <h2 className="text-2xl font-semibold hover:text-green-600">Transportation</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg  p-6 text-center">
            <div className="text-green-500 bg-slate-200 hover:bg-green-500 hover:text-black mb-4 border-2 p-6 rounded-full"><FaWallet size={40} /></div>
            <h2 className="text-2xl font-semibold hover:text-green-600">Affordable Package</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg  p-6 text-center">
            <div className="text-green-500 bg-slate-200 hover:bg-green-500 hover:text-black mb-4 border-2 p-6 rounded-full"><FaCompass size={40} /></div>
            <h2 className="text-2xl font-semibold hover:text-green-600">Travel Guide</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center">
            <div className="text-green-500 bg-slate-200 hover:bg-green-500 hover:text-black mb-4 border-2 p-6 rounded-full"><FaGlobe size={40} /></div>
            <h2 className="text-2xl font-semibold hover:text-green-600">Worldwide Travel</h2>
            </div>
           
            
           </div>
        </div>
    );
}
export default Feature;