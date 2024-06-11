"use client";

import Login from "@/components/Admin/Login";
import Sidebar from "@/components/Admin/Sidebar";
import { useState } from "react";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoogedIn, setIsLoggedIn] = useState(false);

  if (!isLoogedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full overflow-hidden p-8 pt-28">{children}</div>
    </div>
  );
}
