import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="hidden md:block bg-[#581C87] w-1/4 text-white p-4">
      <h1 className="text-2xl font-bold pt-24">Admin Panel</h1>
      <ul className="mt-6 text-lg">
        <li className="py-2">
          <Link href="/admin" className="flex items-center space-x-2">
            <MdDashboard className="text-2xl" />
            <span> Dashboard</span>
          </Link>
        </li>
        <li className="py-2">
          <Link href="/admin/jobs" className="flex items-center space-x-2">
            <MdOutlineWork className="text-2xl" />
            <span>Jobs</span>
          </Link>
        </li>
        <li className="py-2">
          <Link
            href="/admin/candidates"
            className="flex items-center space-x-2"
          >
            <FaUsers className="text-2xl" />
            <span>Candidates</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
