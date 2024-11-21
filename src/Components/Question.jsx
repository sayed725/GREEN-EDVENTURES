import React from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SiAzuredataexplorer } from "react-icons/si";

const Question = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-8">
      <div className="flex flex-col ">
        <div className="flex flex-col">
          {/* Heading Section */}
          <div className="flex flex-col gap-5">
            <h2 className="text-sm font-semibold tracking-widest text-green-600 uppercase">
              Premium Travel ✈️
            </h2>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mt-2">
              Test Out Our Top <br className="hidden md:block" /> Tours &
              Services
            </h1>
          </div>

          {/* Service Section */}
          <div className="mt-12 flex flex-col items-start gap-6 md:gap-8 w-full max-w-4xl">
            {/* Single Service */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <FaPhoneAlt className="text-4xl text-green-600" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  1. Talk To Us
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                Got questions or need expert advice? Our team is here to help you plan the perfect eco-friendly adventure tailored to your needs. Contact us today and start your sustainable travel journey!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start gap-6 md:gap-8 w-full max-w-4xl">
            {/* Single Service */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <MdOutlineTravelExplore className="text-4xl text-green-600" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  2. Find Best Destination
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                Discover the perfect eco-friendly getaway tailored to your interests and passions. From serene mountain treks to vibrant ocean dives, explore sustainable travel options that align with your values. Let us guide you to unforgettable, green adventures!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start gap-6 md:gap-8 w-full max-w-4xl">
            {/* Single Service */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <SiAzuredataexplorer className="text-4xl text-green-600" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  3. Explore The Globe
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                Embark on a journey to uncover the world’s most stunning eco-friendly destinations. Experience diverse cultures, breathtaking landscapes, and sustainable adventures that leave a positive impact. Start your global exploration today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feed back form  */}
      <div className="w-full">
        <div className=" bg-[#0f2d3c] text-white py-[50px] rounded-md">
          <div className=" w-full px-6 flex flex-col gap-10">
            <h1 className="text-3xl font-bold mb-4">
              <span className="flex items-center gap-2">
                Speak With Us <FaPaperPlane className="text-green-600" />
              </span>
            </h1>
            <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
            <form className="rounded-md flex w-full gap-4">
              <div className="w-full flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-1 p-2 border border-indigo-600 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-1 p-2 border border-indigo-600 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full mt-1 p-2 border border-indigo-600 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-9">
                <div>
                  <label htmlFor="help" className="block text-sm font-medium">
                    How Can I Help You?
                  </label>
                  <select
                    id="help"
                    className="w-full mt-1 p-2 border border-indigo-600 rounded  focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select</option>
                    <option value="question">I have a question</option>
                    <option value="feedback">I want to give feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full mt-1 p-2 border border-indigo-600 rounded b focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="w-full bg-yellow-500  font-bold py-2 px-4 rounded hover:bg-yellow-600 transition mt-10 text-white bg-gradient-to-r from-[#184E68] to-[#57CA85]  hover:text-black"
            >
              SUBMIT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
