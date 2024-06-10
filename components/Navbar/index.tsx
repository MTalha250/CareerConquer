import React from "react";

const Navbar = () => {
  return (
    <div className="fixed border top-5 left-1/2 -translate-x-1/2 w-[95%] p-4 shadow-xl flex justify-between items-center bg-white z-50 rounded-full">
      <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
        Career<span className="text-purple-900">Conquer</span>
      </h1>
      <ul className="flex justify-center gap-10 text-gray-500">
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          Queensland
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          Victoria
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          South Australia
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          Western Australia
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          Tasmania
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          New South Wales
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
