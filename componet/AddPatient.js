"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function AddPatientForm({ onClose }) {
  const [date, setDate] = useState("");

  // Handler for date input changes
  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log("Selected date:", event.target.value); // Optional: Log the selected date
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
      <div className="flex items-center justify-center w-full h-full">
        <motion.div
          className="relative rounded-lg flex flex-col gap-4 w-[700px] h-[400px] overflow-hidden overflow-y-scroll bg-gray-50 p-4 "
          initial={{ opacity: 0, y: -50 }}
          exit={{ opacity: 1, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-semibold mb-4">Patient Registration</h1>
          <div className="">
            <div className="mb-8">
              <div className="flex gap-6 items-center pb-6 border-b-2 ">
              <div className="w-1/4">
              <legend className="uppercase tracking-wide text-sm">
                    Personal Information
                  </legend>
                </div>
                <div className="flex-1 flex flex-col gap-y-3  mt-2 ">
                  <div className="  flex justify-between gap-6 w-full  ">
                    <div className="flex flex-col flex-1 items-start">
                      <label className="block mb-2 ml-2  text-sm font-bold items-center">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="flex flex-col flex-1 items-start">
                      <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="Last_name"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div className="  flex justify-between gap-6 w-full ">
                    <div className="flex flex-col flex-1 items-start">
                      <label className=" mb-2 ml-2 text-sm font-bold  ">
                        Birth Date
                      </label>
                      <div className="flex flex-col ">
                        <div className="relative max-w-sm">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                              className="w-4 h-4 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <input
                            id="datepicker-autohide"
                            type="date" // Use type="date" for native date picker
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full ps-10 p-2.5"
                            placeholder="Select date"
                            value={date}
                            onChange={handleDateChange} // Add onChange event handler
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 ">
                      <div className="flex flex-col items-start flex-1">
                        <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                          Chooice Gender
                        </label>
                        <select
                          id="gender"
                          defaultValue={"gender"}
                          className="bg-gray-50 border border-blue-900  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 p-2.5 "
                        >
                          <option value="US">Male</option>
                          <option value="CA">Female</option>
                        </select>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="  flex justify-between gap-6 w-full  ">
                    <div className="flex flex-col flex-1 items-start">
                      <label className="block mb-2 ml-2  text-sm font-bold items-center">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(555) 555-5555"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                        required
                      />
                    </div>
                    <div className="flex flex-col flex-1 items-start">
                      <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john.doe@example.com"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* layer two */}
              <div className="flex gap-6 items-center py-6 border-b-2">
                <div className="w-1/4">
                  <legend className="uppercase tracking-wide text-sm">
                    Address
                  </legend>
                </div>
                <div className="flex-1 flex flex-col gap-y-3  mt-2 ">
                  <div className="  flex justify-between gap-6 w-full  ">
                    <div className="flex flex-col flex-1 items-start">
                      <label className="block mb-2 ml-2  text-sm font-bold items-center">
                        Country
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                        placeholder="Ethiopia"
                        required
                      />
                    </div>
                    <div className="flex flex-1 ">
                      <div className="flex flex-col items-start flex-1">
                        <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                        Reigen
                        </label>
                        <select
                          id="gender"
                          defaultValue={"gender"}
                          className="bg-gray-50 border border-blue-900  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 p-2.5 "
                        >
                          <option value="US">Addis Ababa</option>
                          <option value="CA">Mekele</option>
                          <option value="CA">Adam</option>
                          <option value="CA">Hawassa</option>
                          <option value="CA">Bahir Dar</option>
                        </select>{" "}
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
              {/* layer three */}
              <div className="flex gap-6 items-center py-6 border-b-2">
                <div className="w-1/4">
                  <legend className="uppercase tracking-wide text-sm">
                  Emergency Contact
                  </legend>
                </div>
                <div className="flex-1 flex flex-col gap-y-3  mt-2 ">
                  <div className="  flex justify-between gap-6 w-full  ">
                  <div className="flex flex-col flex-1 items-start">
                      <label className="block mb-2 ml-2  text-sm font-bold items-center">
                        Contact name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                        placeholder="John bob"
                        required
                      />
                    </div>
                    <div className="flex flex-col flex-1 items-start">
                      <label className="block mb-2 ml-2  text-sm font-bold items-center">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(555) 555-5555"
                        className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                        required
                      />
                    </div>
                   
                  </div>

                  
                </div>
              </div>
              <div className="flex justify-end w-full gap-6  pt-6">
                <div
                  className="bg-gray-200  px-4 py-2 rounded-xl cursor-pointer items-center"
                  onClick={onClose}
                >
                  Cancel
                </div>
                <div
                  className="bg-btnPrimary text-white px-4 py-2 rounded-xl cursor-pointer items-center"
                  //   onClick={handleOpenCard}
                >
                  Make an Appointment
                </div>{" "}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AddPatientForm;
