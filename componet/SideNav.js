import React from "react";
import {
  FaTooth,
  FaCalendarAlt,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";

function SideNav() {
  return (
    <div>
      {/* Sidebar */}
      <aside className="w-56 bg-white min-h-screen p-4 space-y-4 flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full gap-3">
          <div className="flex items-center space-x-2">
            <FaTooth className="text-blue-500" size={30} />
            <h1 className="text-2xl font-bold">Dentino</h1>
          </div>
          <nav className="mt-8 space-y-2">
            <Link href="/">
              <div className="flex items-center space-x-2 p-2 rounded-md cursour-pointer hover:bg-btnPrimary hover:text-white text-secondary ">
                <FaClipboardList />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link href="/appointment">
              <div className="flex items-center space-x-2 p-2 rounded-md cursour-pointer hover:bg-btnPrimary hover:text-white text-secondary">
                <FaCalendarAlt />
                <span>Appointments</span>
              </div>
            </Link>
            <Link href="/requests
            ">
              <div className="flex items-center space-x-2 p-2 rounded-md cursour-pointer hover:bg-btnPrimary hover:text-white text-secondary">
                <IoPersonAdd />
              <span>Request</span>
              </div>
            </Link>
            <Link href="/PatientList">
              <div className="flex items-center space-x-2 p-2 rounded-md cursour-pointer  hover:bg-btnPrimary hover:text-white text-secondary">
                <FaUsers />
              <span>Patients</span>
              </div>
            </Link>
            <Link href="/doctorlists">
              <div className="flex items-center space-x-2 p-2 rounded-md cursour-pointer hover:bg-btnPrimary hover:text-white text-secondary">
                <FaUserDoctor />
                <span>Doctors</span>
              </div>
            </Link>
            <Link href="/payouts">
              <div className="flex items-center space-x-2 p-2 rounded-md cursour-pointer hover:bg-btnPrimary hover:text-white text-secondary">
                <MdPayment />
                <span>PayOuts</span>
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center space-x-2 p-2 rounded-md cursour-pointer hover:bg-btnPrimary hover:text-white text-secondary">
                <RiSettings3Fill />
                <span>Setting</span>
              </div>
            </Link>
            {/* Add more navigation links as needed */}
          </nav>
        </div>
        <div className=" text-secondary hover:text-black cursor-pointer flex  items-center gap-2">
          <TbLogout2 size={24} />
          <div className="flex justify-center items-center cursor-pointer">Log out</div>
        </div>
      </aside>
    </div>
  );
}

export default SideNav;
