import React, { useState } from "react";
import { PiListBulletsFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { MdPeopleAlt, MdLogout } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Icon for Small Screens */}
      {!isOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button onClick={toggleSidebar} className="text-green-600 text-2xl">
            ☰
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64 w-64 z-40`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center mb-6 border p-2 rounded-lg border-gray-500 ">
            <img
              src="path-to-profile-image.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">Kanye East</p>
              <p className="text-sm text-gray-400">k.east@student.io</p>
            </div>
          </div>

          <ul className="flex flex-col justify-between flex-1">
            <div className="space-y-2">
              <li className="cursor-pointer rounded">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `flex items-center w-full p-2 rounded ${
        isActive ? 'bg-gray-800' : 'hover:bg-gray-800'
      }`
    }
  >
    <span className="mr-2"><PiListBulletsFill /></span>
    Overview
  </NavLink>
</li>

<li className="cursor-pointer rounded">
  <NavLink
    to="/classes"
    className={({ isActive }) =>
      `flex items-center w-full p-2 rounded ${
        isActive ? 'bg-gray-800' : 'hover:bg-gray-800'
      }`
    }
  >
    <span className="mr-2"><FaGraduationCap /></span>
    Classes
  </NavLink>
</li>
              <li className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="mr-2">
                  <LuBadgeCheck />
                </span>{" "}
                Grades
              </li>
              <li className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="mr-2">
                  <MdPeopleAlt />
                </span>{" "}
                Teachers
              </li>
              <li className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="mr-2">
                  <FiEdit />
                </span>{" "}
                Notes
              </li>
            </div>

            <div className="space-y-2 border-t">
              <li className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="mr-2">
                  <IoIosSettings />
                </span>{" "}
                Settings
              </li>
              <li className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer">
                <span className="mr-2">
                  <MdLogout />
                </span>{" "}
                Log out
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Overlay for small screens when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
