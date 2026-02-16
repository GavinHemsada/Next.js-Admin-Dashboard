"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import {CalenderIcon,UserCircleIcon} from "@/icons"
import { FaBars, FaHome, FaChartBar, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const categories = [
    { name: "Dashboard", icon: <FaHome />, path: "/admin/dashboard" },
    { name: "User Profile", icon: <UserCircleIcon />, path: "/admin/dashboard/profile" },
    { name: "Calendar", icon: <CalenderIcon />, path: "/admin/dashboard/Calender" },
    { name: "Analytics", icon: <FaChartBar />, path: "/admin/dashboard/Analytics" },
    { name: "Messages", icon: <FaEnvelope />, path: "/admin/dashboard/Messages" },
  ];

  return (
    <div className={`h-screen bg-gray-800 text-white transition-all duration-300 ${isExpanded ? "w-64" : "w-16"}`}>
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center">
        <span className={`text-lg font-bold transition-all duration-300 ${isExpanded ? "block" : "hidden"}`}>
          Menu
        </span>
        <button onClick={toggleSidebar} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Sidebar Categories */}
      <nav className="flex-1">
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="hover:bg-gray-700 cursor-pointer transition-all duration-300">
              <Link href={category.path} className="flex items-center p-4">
                <span className="text-xl">{category.icon}</span>
                <span className={`ml-4 transition-all duration-300 ${isExpanded ? "block" : "hidden"}`}>
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
