import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaLeaf , FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdFeaturedPlayList } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdIntegrationInstructions } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";

const Details = () => {
  const [place, setPlace] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();

  const {
    AdventureTitle,
    Image,
    EcoFriendlyFeatures,
    BookingAvailability,
    Location,
    AdventureCost,
    ID,
    MaxGroupSize,
    Duration,
    ShortDescription,
    IncludedItems,
    CategoryName,
    AdventureLevel,
    SpecialInstructions
  } = place;

  useEffect(() => {
    const singleData = data.find((place) => place.ID == id);
    setPlace(singleData);
  }, []);

  console.log(place);


  const handleBookingForm = (e)=>{
    e.preventDefault()
  }

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

   
    if (currentHour >= 10 && currentHour < 20) {
     
      window.open("https://meet.google.com/", "_blank");
    } else {
      
      setShowModal(true);
    }
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <div>
          {" "}
          <img
            className="w-full h-[500px] rounded-md"
            src={Image}
            alt=""
          />{" "}
        </div>
      </main>
      {/* information  */}
      <div className="information grid grid-cols-4 w-10/12 mx-auto py-10 gap-8">
        <div className="info col-span-3">
          <div>
            <h2 className="text-4xl font-bold">{AdventureTitle}</h2>
            <div className="mt-2 flex items-center text-gray-600  text-xl">
              <FaMapMarkerAlt className="mr-2 text-green-600" />
              <span>{Location}</span>
            </div>

            <div className="border-t-2 border-green-600 border-b-2 border-dashed my-10 py-4 flex justify-between px-2">
              <div className=" flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-green-600 text-xl" />
                <span>{BookingAvailability}</span>
              </div>
              <div className=" flex items-center text-gray-600">
                <IoMdTime className="mr-2 text-white text-xl bg-green-600 rounded-full" />
                <span>{Duration}</span>
              </div>
              <div className=" flex items-center text-gray-600">
                <FaPeopleGroup className="mr-2 text-green-600 text-xl" />
                <span> Max group Size - {MaxGroupSize}</span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
              <h2 className="text-gray-600 text-2xl font-bold">
                About This Trip
              </h2>
              <p>{ShortDescription}</p>
              </div>

             <div className="flex flex-col gap-5">
             <div className="flex items-center text-gray-600 text-xl font-semibold">
                <MdFeaturedPlayList className="mr-2 text-green-600" />
                <span>Tour Highlights:</span>
              </div>
              <div className="list">
                {IncludedItems &&
                  IncludedItems.map((item, index) => (
                    <li key={index} className="text-grey-600">
                      {item}
                    </li>
                  ))}
              </div>
             </div>

              <div className="flex items-center text-gray-600 text-xl font-semibold">
                <MdCategory className="mr-2 text-green-600" />
                <span>Category Name : {CategoryName}</span>
              </div>

              <div className="flex items-center text-gray-600 text-xl font-semibold">
                < SiLevelsdotfyi  className="mr-2 text-green-600" />
                <span>Adventure Level : {AdventureLevel}</span>
              </div>

             <div className="flex flex-col gap-5">  
             <div className="flex items-center text-gray-600 text-xl font-semibold">
                <FaLeaf className="mr-2 text-green-600" />
                <span>Eco-Friendly Features:</span>
              </div>
              <div className="list">
                {EcoFriendlyFeatures &&
                  EcoFriendlyFeatures.map((feature, index) => (
                    <li key={index} className="text-grey-600">
                      {feature}
                    </li>
                  ))}
              </div>
             </div>


             <div className="flex flex-col gap-5">
             <div className="flex items-center text-gray-600 text-xl font-semibold">
                <MdIntegrationInstructions className="mr-2 text-green-600" />
                <span>Eco-Friendly Features:</span>
              </div>
              <div className="list">
                {SpecialInstructions &&
                  SpecialInstructions.map((feature, index) => (
                    <li key={index} className="text-grey-600">
                      {feature}
                    </li>
                  ))}
              </div>
             </div>


              <div className="flex items-center text-gray-600 text-xl font-semibold">
                < GiSchoolBag className="mr-2 text-green-600" />
                <span>Packing List: </span>
              </div>
              
              <span>All participants must bring quality outdoor clothing on this expedition for their comfort and safety to be prepared for all types of weather. </span>
  




            </div>
          </div>
        </div>
        {/* booking   */}

        <div className="booking col-span-1">


        <div className="w-full mx-auto bg-white border border-gray-200 shadow-lg rounded-lg p-6">
      {/* Pricing Section */}
      <div className="text-gray-800 flex flex-col gap-3">
        <p className="text-sm font-semibold"><span className="text-green-600 text-2xl"> From {AdventureCost} Tk</span> per person</p>
        <p className="text-sm text-gray-500">Price varies by group size</p>
        <p className="text-sm text-green-600 font-medium mt-1">Lowest Price Guarantee</p>
      </div>

      {/* form sec  */}

      <div className="flex justify-center items-center w-full py-3">
      <div className=" rounded-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-green-600">Book This Tour</h2>

        <form onSubmit={handleBookingForm}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Number of Person */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Number of Person</label>
            <select
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>1 person</option>
              <option>2 persons</option>
              <option>3 persons</option>
              <option>4+ persons</option>
            </select>
          </div>

          {/* Departure Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Departure date</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full border rounded-md pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Your message (optional)</label>
            <textarea
              placeholder="Write your message here..."
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black"
          >
            Book This Tour
          </button>
        </form>
      </div>
    </div>

      

      
      {/* Additional Information */}
      <div className="mt-6 bg-green-50 p-4 rounded-lg">
        <div className="flex items-start mb-2">
          <FaCheckCircle className="text-green-600 text-3xl  mr-3" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-center">Free cancellation</span> up to 24 hours before the experience starts (local time)
          </p>
        </div>
        <div className="flex items-start">
          <FaCheckCircle className="text-green-600 text-3xl mr-3" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Reserve Now and Pay Later</span> - Secure your spot while staying flexible
          </p>
        </div>
      </div>
    </div>

    {/* more info expert button  */}

       <div className="border-2 p-5 mt-5 flex flex-col gap-3">
        <h2 className="text-gray-600 font-semibold text-xl border-b-2">For More Information </h2>
        <p className="text-green-600 flex gap-4 items-center "> <FaPhoneAlt></FaPhoneAlt> <span>+8801812345678</span> </p>
        <p className="text-green-600 flex gap-4 items-center "> <FaPhoneAlt></FaPhoneAlt> <span>+8801900000000</span> </p>
       <button
          onClick={handleTalkWithExpert}
          className="w-full btn text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black"
        >
          Talk with Expert
        </button>
       </div>


        {/* Modal for Consultation Time */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-center">Consultation Time</h3>
              <p className="text-gray-700 mb-6 text-center">
                Experts wil be available for consultation between <strong className="text-green-600">10:00 AM</strong> To 
                <strong className="text-green-600"> 8:00 PM</strong>. <br /> Please contact us during these hours.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full btn text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        )}

     


        </div>
      </div>

      <footer>
        {" "}
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Details;
