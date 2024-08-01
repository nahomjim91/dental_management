import React from "react";
import {
  FaTooth,
  FaCalendarAlt,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

function SideNav() {
  return (
    <div>
      {/* Sidebar */}
      <aside className="w-64 bg-blue-50 min-h-screen p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <FaTooth className="text-blue-500" size={30} />
          <h1 className="text-2xl font-bold">Dentino</h1>
        </div>
        <div className="flex flex-col justify-between h-full">
          <nav className="mt-8 space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2 p-2 rounded-md bg-blue-500 text-white"
            >
              <FaClipboardList />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-500 hover:text-white"
            >
              <FaCalendarAlt />
              <span>Appointments</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-blue-500 hover:text-white"
            >
              <FaUsers />
              <span>Patients</span>
            </a>
            {/* Add more navigation links as needed */}
          </nav>
          <div className=" text-purple-400">
            Log out
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SideNav;
