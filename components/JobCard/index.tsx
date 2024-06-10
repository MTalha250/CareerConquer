import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
const JobCard = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white p-6 border hover:scale-[1.03] transition duration-200 ease-in-out">
      <div className="font-bold text-xl mb-2">Web Dev Job</div>
      <p className="text-gray-700 text-base mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        malesuada, justo nec lacinia venenatis
      </p>
      <div className="flex items-center mb-2">
        <FaLocationDot className="text-purple-900 mr-2" />
        <span className="text-gray-600">Location: City, Country</span>
      </div>
      <div className="flex items-center">
        <FaClock className="text-purple-900 mr-2" />
        <span className="text-gray-600">Posted: June 10, 2024</span>
      </div>
    </div>
  );
};

export default JobCard;
