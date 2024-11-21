import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
    {
      name: "Brenda Sherman",
      image: "/random-person3.jpg",
      description: "An experienced travel guide with a passion for exploring hidden gems around the world. Brenda specializes in eco-tourism and creating memorable adventures for travelers.",
    },
    {
      name: "Derek Horton",
      image: "/random person 1.jpg",
      description: "A professional wildlife photographer with over 10 years of experience. Derek captures stunning images of nature and works to raise awareness about conservation efforts.",
    },
    {
      name: "Alicia Mckenzie",
      image: "/public/random person-8.avif",
      description: "A travel consultant who excels at creating personalized itineraries. Alicia's dedication to customer satisfaction has earned her recognition in the travel industry.",
    },
    {
      name: "Andy Bowen",
      image: "/random-person 2.jpg",
      description: "An adventure enthusiast and outdoor survival expert. Andy loves organizing hiking and camping trips while promoting sustainable travel practices.",
    },
    {
      name: "Sophia Turner",
      image: "/public/random person-7.avif",
      description: "A marine biologist turned eco-tour guide, Sophia focuses on educating travelers about marine conservation and leading sustainable beach tours.",
    },
    {
      name: "Liam Carter",
      image: "/random person-4.webp",
      description: "A mountain climbing expert with years of experience scaling peaks worldwide. Liam specializes in organizing challenging and safe trekking expeditions.",
    },
    {
      name: "Chloe Adams",
      image: "/random person-5.jpeg",
      description: "An environmental activist and travel writer who shares her experiences to inspire eco-friendly adventures and responsible tourism.",
    },
    {
      name: "Ethan Brooks",
      image: "/random person-6.jpg",
      description: "An expert in cultural tourism, Ethan introduces travelers to unique traditions and local customs while supporting community-based tourism initiatives.",
    },
  ];
  

const TeamSection = () => {
  return (
    <div className="bg-gray-50 py-12">
        <h2 className="text-4xl font-semibold text-center pb-10">Meet Our Professional Team</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-sm text-gray-600 text-center mb-4">{member.description}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-green-500 hover:text-gray-700 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-gray-700 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-gray-700 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-gray-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
