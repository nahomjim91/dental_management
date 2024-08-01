// export default function Home() {
//   return (
//     <div className="w-full h-full">
//       {/* <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//   <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
//   <span>Download</span>
// </button>  */}
//     {/*  */}

//     </div>
//   );
// }
// components/Dashboard.jsx
"use client";
import { useState } from "react";
import { MdPeopleAlt, MdMoreVert } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { VscRequestChanges } from "react-icons/vsc";

import { DatePicker, FormatDate } from "@/componet/DatePicker";
export default function Home() {
  const [appointments, setAppointments] = useState([
    {
      date: "2024-08-01",
      patients: [
        { time: "12:00", patient: "Mike Robin", type: "Consultation" },
        {
          time: "14:00",
          patient: "Jane Black",
          type: "Wisdom Teeth Removal",
          isMember: true,
        },
      ],
    },
    {
      date: "2024-08-02",
      patients: [
        {
          time: "11:00",
          patient: "Esther Wilson",
          type: "Bleaching",
          isMember: true,
        },
        { time: "12:30", patient: "Andy Mcconnell", type: "Scaling" },
        { time: "13:45", patient: "Melisa Cooper", type: "Consultation" },
      ],
    },
  ]);

  const patientsToday = 8;
  const totalPatients = 364;
  const requests = 20;

  return (
    <div className="flex flex-col">
      {/* <TopHeader/> */}
      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {/*Page Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Dashboard Overview</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl">
              Make an Appointment
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded-xl">
              Add Patient
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between gap-4">
          <section className="w-full">
            {/* Statistics */}
            <section className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl shadow-md flex justify-around items-center">
                <IoPersonSharp
                  size={30}
                  className=" bg-slate-400 w-12 h-12 p-2 rounded-lg"
                />{" "}
                <div>
                  <p className="text-gray-600">Patients Today</p>
                  <p className="text-2xl font-semibold">{patientsToday}</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md flex justify-around items-center">
                <MdPeopleAlt
                  size={30}
                  className=" bg-slate-400 w-12 h-12 p-2 rounded-lg"
                />
                <div className="">
                  <p className="text-gray-600">Total Patients</p>
                  <p className="text-2xl font-semibold">{totalPatients}</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md flex justify-around items-center">
                <VscRequestChanges
                  size={30}
                  className=" bg-slate-400 w-12 h-12 p-2 rounded-lg"
                />{" "}
                <div>
                  <p className="text-gray-600">Requests</p>
                  <p className="text-2xl font-semibold">{requests}</p>
                </div>
              </div>
            </section>

            {/* Appointments Statistics */}
            <section className="mb-8 ">
              <h3 className="text-xl font-semibold mb-4">
                Appointments Statistics
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-600 mb-2">October 2021</p>
                <div className="h-40 flex items-center justify-center bg-blue-100 rounded-lg">
                  {/* Chart Placeholder */}
                  <p>Chart Placeholder</p>
                </div>
              </div>
            </section>

            <section className=" bg-white rounded-lg shadow-md">
              <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                  Latest Patients
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="">
                      <tr className="text-left">
                        <th className="p-3">No.</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Member Ship</th>
                        <th className="p-3 ">Treatment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                        <td className="p-3">
                          <p>97412378923</p>
                        </td>
                        <td className="p-3">
                          <p>14 Jan 2022</p>
                          <p className="dark:text-gray-600">Friday</p>
                        </td>
                        <td className="p-3">
                          <p>selihom kidane</p>
                        </td>
                        <td className="p-3 ">
                          <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                            <span>Pending</span>
                          </span>
                        </td>
                        <td className="p-3">
                          <p>Root Canal</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </section>

          {/* Upcoming Appointments */}
          <section className="w-[45%] h-full bg-white rounded-lg">
            <DatePicker />
            {/* Upcoming Appointments */}

            <div>
              <h3 className="text-lg font-semibold mb-1 px-4">
                Upcoming Appointments
              </h3>

              <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
                {appointments.map((appointment, index) => (
                  <div key={index}>
                    <h4>
                      <FormatDate date={new Date(appointment.date)} />
                    </h4>
                    {appointment.patients.map((patient, index) => (
                      <div
                        key={index}
                        className="flex gap-4 items-center  p-2  "
                      >
                        <span className="text-sm">{patient.time}</span>
                        <div className="flex items-center justify-between space-x-4 rounded-xl   bg-[#F4F9FF] w-full px-2 py-4">
                          <div className="flex space-x-4 items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                            <div>
                              <div className="flex gap-2">
                                <p className="font-medium">
                                  {patient.patient}
                                </p>
                                <span
                                  className={`${
                                    patient.isMember ? "bg-red-500" : ""
                                  } text-white text-xs px-3 m-0 flex items-center rounded-xl`}
                                >
                                  {patient.isMember ? "Member" : ""}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {patient.type}
                              </p>
                            </div>
                          </div>
                          <MdMoreVert size={24} />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
