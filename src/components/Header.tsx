// components/Header.tsx
"use client";

import Image from "next/image";
import { FaBell, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="ml-2 text-lg font-bold hidden md:block">Dashboard</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 max-w-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Notification & Profile */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell className="text-xl" />
        </button>
        <div className="flex items-center">
          <Image
            src="/images/user/owner.jpg" // Replace with actual user image
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="ml-2 hidden md:block">John Doe</span>
        </div>
      </div>
    </header>
  );
}
