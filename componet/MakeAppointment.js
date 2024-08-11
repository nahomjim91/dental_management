"use clinet";
import React, { useState } from "react";
// import { Datepicker, Label } from "flowbite-react";
import { motion } from "framer-motion";
// import "flowbite/dist/flowbite.turbo.js";

function MakeAppointment({ onClose }) {
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState("");

  // Handler for date input changes
  const handleDateChange = (event) => {
    setDate(event.target.value);
    console.log("Selected date:", event.target.value); // Optional: Log the selected date
  };

  // Handler for time input changes
  const handleTimeChange = (event) => {
    setTime(event.target.value);
    console.log("Selected time:", event.target.value); // Optional: Log the selected time
  };

  return (
    // <div className="z-30 fixed  w-[500px] flex flex-col gap-3 p-6 bg-white rounded-xl  inset-0  items-start "  >
    //   {/* header */}
    //   <div >
    //   <h3 className="text-2xl font-semibold">Make An Appointment </h3>
    //   </div>
    //   {/* form */}
    //   <div>
    //     {/* layer1 */}
    //     <div>
    //       <div>
    //         {" "}
    //         <label>Chooice Patient</label>
    //         <input type="text" />
    //       </div>
    //       <div>
    //         {" "}
    //         <label>Chooice Dentist</label>
    //         <input type="text" />
    //       </div>
    //     </div>
    //     {/* layer2*/}
    //     <div>
    //       <div>
    //         {" "}
    //         <label>Appointment Date</label>
    //         <input type="date" />
    //       </div>
    //       <div>
    //         {" "}
    //         <label>Time</label>
    //         <input type="time" />
    //       </div>
    //     </div>
    //     {/* layer3 */}
    //     <div>
    //       <div>
    //         {" "}
    //         <label>Treatment</label>
    //         <input type="text" />
    //       </div>
    //       <div>
    //         {" "}
    //         <label>Note</label>
    //         <textarea type="text" />
    //       </div>
    //     </div>
    //     {/* buttons */}
    //     <div>
    //       <div>Cancel</div>
    //       <div>Make Appointment</div>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed md:h-[200vh] h-[130vh] flex items-center justify-center inset-0 text-primary">
      <div className="inset-0 flex items-center justify-center fixed ">
        <motion.div
          className="rounded-lg flex flex-col  gap-4 w-full max-w-xl p-7 mx-4 space-y-4 text-center bg-gray-50   "
          initial={{ opacity: 0, y: -50 }}
          exit={{ opacity: 1, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl font-semibold text-start">
            Make An Appointment{" "}
          </h1>
          <motion.div

          //   onClick={() => loginWithRedirect()}
          >
            {/* form */}
            <div className="w-full flex flex-col items-start space-y-7 ">
              {/* layer1 */}
              <div className=" flex justify-between gap-6 w-full ">
                <div className="flex flex-col items-start flex-1">
                  <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                    Chooice patient
                  </label>
                  <select
                    id="countries"
                    defaultValue={"selihom Kidane"}
                    className="bg-gray-50 border border-blue-900  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  w-full p-2.5 "
                  >
                    {/* <option selected>selihom Kidane</option> */}
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>{" "}
                </div>
                <div className="flex flex-col items-start flex-1">
                  <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                    Chooice patient
                    
                  </label>{" "}
                  <select
                    defaultValue={"Selihom Kidane"}
                    id="countries"
                    className="bg-gray-50 border border-blue-900  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  w-full p-2.5 "
                  >
                    {/* <option selected>Selihom Kidane</option> */}
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>{" "}
                </div>
              </div>
              {/* layer2*/}
              <div className="  flex justify-between gap-6 w-full">
                <div className="flex flex-col flex-1 items-start">
                  {" "}
                  <label className=" mb-2 ml-2 text-sm font-bold  ">
                    Appointment Date
                  </label>
                  <div className="flex flex-col w-full ">
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

                    {/* <Datepicker
                      minDate={new Date()}
                      className="w-full "
                      onChangeCapture={handleDateChange} // Handle date change
                      placeholder="Select a date"
                    /> */}
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="flex flex-col items-start ">
                    <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                      Select time:
                    </label>
                    <div className="flex">
                      <input
                        type="time"
                        id="time"
                        className="rounded-none rounded-s-lg bg-gray-50 border leading-none block flex-1 w-full text-sm border-gray-300 p-2.5 focus:ring-blue-900 focus:border-blue-900"
                        min="09:00"
                        max="18:00"
                        value={time}
                        onChange={handleTimeChange} // Add onChange event handler
                        required
                      />
                      <span className="inline-flex items-center px-3 text-sm bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg
                          className="w-4 h-4 text-blue-900 dark:text-gray-400" // Corrected text-blue-900
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* layer3 */}
              <div className="  flex justify-between gap-6 w-full ">
                <div className="flex flex-col flex-1 items-start">
                  <label className="block mb-2 ml-2  text-sm font-bold items-center">
                    First name
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
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900  p-2.5"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              {/* buttons */}
              <div className="flex justify-end w-full gap-6 ">
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default MakeAppointment;
