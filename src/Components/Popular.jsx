import React from 'react';

const Popular = () => {
    const destinations = [
        { name: "Dhaka", image: "/dhaka1-1024x682.jpg" },
        { name: "Khulna", image: "/khulna.jpg" },
        { name: "Sylhet", image: "/sylet.webp" },
        { name: "Barisal", image: "/barisal.jpg" },
        { name: "Chittagong", image: "/chittagong.webp" },
        { name: "Rajshahi", image: "/rajshahi.jpg" },
      ];
    return (
        <div className="bg-white px-5">
       <div className='flex flex-col gap-5'>    
           <p className='text-sm text-center'>Bangladesh’s best tourist destinations</p>
           <h2 className='text-4xl text-center font-semibold'>Explore Some Popular Destinations</h2>
           </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-10">
        {destinations.map((destination) => (
          <div
            key={destination.name}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">{destination.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Popular;