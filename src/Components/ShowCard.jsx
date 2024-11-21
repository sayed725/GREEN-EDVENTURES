import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const ShowCard = () => {

    const allData = useLoaderData()
   

    return (
        <div>
           <div className='flex flex-col gap-5'>    
           <p className='text-sm text-center animate__slideInRight animate__animated'>Explore Iconic Destinations</p>
           <h2 className='animate__animated animate__slideInLeft text-4xl text-center font-semibold'>Discover The Forest of Bangladesh</h2>
           </div>
           {/* card section starts  */}

           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 mt-10'>
            {
                allData.map(data=><Card key={data.ID} data={data}></Card>)
            }
           </div>
        </div>
    );
};

export default ShowCard;