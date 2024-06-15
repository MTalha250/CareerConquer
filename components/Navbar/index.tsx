import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="fixed border top-5 left-1/2 -translate-x-1/2 w-[95%] py-4 px-5 lg:px-10 shadow-xl flex justify-between items-center bg-white z-50 rounded-full">
      <Link href="/">
        <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-800 tracking-wide">
          Career<span className="text-purple-900">Conquer</span>
        </h1>
      </Link>
      <ul className="hidden md:flex justify-center text-xs lg:text-sm xl:text-base gap-3 lg:gap-5 xl:gap-10 text-gray-500">
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
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <IoMenu className="text-3xl" />
          </SheetTrigger>
          <SheetContent>
            <h1 className="mt-5">
              <Link href="/">
                <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
                  <SheetClose>
                    Career<span className="text-purple-900">Conquer</span>
                  </SheetClose>
                </h1>
              </Link>
            </h1>
            <ul className="mt-10 space-y-4 text-gray-500 text-lg">
              <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <Link href="/state/queensland">
                  <SheetClose>Queensland</SheetClose>
                </Link>
              </li>
              <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <Link href="/state/victoria">
                  <SheetClose>Victoria</SheetClose>
                </Link>
              </li>
              <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <Link href="/state/south-australia">
                  <SheetClose>South Australia</SheetClose>
                </Link>
              </li>
              <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <Link href="/state/western-australia">
                  <SheetClose>Western Australia</SheetClose>
                </Link>
              </li>
              <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <Link href="/state/tasmania">
                  <SheetClose>Tasmania</SheetClose>
                </Link>
              </li>
              <li className="hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                <Link href="/state/new-south-wales">
                  <SheetClose>New South Wales</SheetClose>
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
