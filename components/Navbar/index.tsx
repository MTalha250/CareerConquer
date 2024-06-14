import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed border top-5 left-1/2 -translate-x-1/2 w-[95%] py-4 px-10 shadow-xl flex justify-between items-center bg-white z-50 rounded-full">
      <Link href="/">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Career<span className="text-purple-900">Conquer</span>
        </h1>
      </Link>
      <ul className="flex justify-center gap-10 text-gray-500">
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          <Link href="/state/queensland">Queensland</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          <Link href="/state/victoria">Victoria</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          <Link href="/state/south-australia">South Australia</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          <Link href="/state/western-australia">Western Australia</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          <Link href="/state/tasmania">Tasmania</Link>
        </li>
        <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
          <Link href="/state/new-south-wales">New South Wales</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
