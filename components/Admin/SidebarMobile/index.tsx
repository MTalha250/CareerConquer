import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="fixed left-5 top-28 md:hidden">
        <IoMenu className="text-3xl" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-[#581C87] w-[240px] text-white p-4"
      >
        <h1 className="text-2xl font-bold pt-24">Admin Panel</h1>
        <ul className="mt-6 text-lg">
          <li className="py-2">
            <Link href="/admin">
              <SheetClose className="flex items-center space-x-2">
                <MdDashboard className="text-2xl" />
                <span> Dashboard</span>
              </SheetClose>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/admin/jobs">
              <SheetClose className="flex items-center space-x-2">
                <MdOutlineWork className="text-2xl" />
                <span>Jobs</span>
              </SheetClose>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/admin/candidates">
              <SheetClose className="flex items-center space-x-2">
                <FaUsers className="text-2xl" />
                <span>Candidates</span>
              </SheetClose>
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;
