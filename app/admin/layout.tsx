"use client";

import Login from "@/components/Admin/Login";
import Sidebar from "@/components/Admin/Sidebar";
import SidebarMobile from "@/components/Admin/SidebarMobile";
import { useState } from "react";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoogedIn, setIsLoggedIn] = useState(false);

  // if (!isLoogedIn) {
  //   return <Login setIsLoggedIn={setIsLoggedIn} />;
  // }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <SidebarMobile />
      <div className="w-full overflow-hidden py-8 px-4 md:px-8 pt-28">
        {children}
      </div>
    </div>
  );
}
