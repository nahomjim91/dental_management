"use client"
import  { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdMoreVert,
} from "react-icons/md";

import AppointmentDetails from "@/componet/AppointmentDetails";
import Topbutton from "@/componet/Topbutton";

// Helper function to generate time slots
const generateTimeSlots = () => {
  const times = [];
  for (let hour = 8; hour <= 19; hour++) {
    let temp = hour === 12 ? 12 : hour % 12;
    const time = temp < 10 ? `0${temp}:00` : `${temp}:00`;
    times.push(time);
  }
  return times;
};

// Helper function to get the start of the week (Monday)
const getStartOfWeek = (date) => {
  const current = new Date(date);
  const day = current.getDay();
  const diff = current.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  return new Date(current.setDate(diff));
};
// Helper function to get the dates of the current week (Monday to Saturday)
const getWeekDates = (startOfWeek) => {
  const dates = [];
  for (let i = 0; i < 6; i++) {
    // Change loop to go through 6 days instead of 7
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    dates.push(date);
  }
  return dates;
};

// Calendar component that takes appointments as props
const Calendar = ({ data, listWay }) => {
  // State to keep track of the current date (start of the current week)
  const [currentDate, setCurrentDate] = useState(new Date());
  const [openPatient, setOpenPatient] = useState(false);

  const handleOpenCard = () => {
    setOpenPatient(true);
  };

  const handleCloseCard = () => {
    setOpenPatient(false);
  };

  // Get the start date of the current week and the dates of the week
  const startOfWeek = getStartOfWeek(currentDate);
  const weekDates = getWeekDates(startOfWeek);

  // Filter the data to only include patients of the current week
  const weekData = weekDates.map((date) => {
    const dateString = date.toISOString().split("T")[0]; // YYYY-MM-DD
    return {
      date: dateString,
      patients: data.find((d) => d.date === dateString)?.patients || [],
    };
  });

  const timeSlots = generateTimeSlots();

  // Handler to go to the previous week
  const handlePrevWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 6);
      return newDate;
    });
  };

  // Handler to go to the next week
  const handleNextWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 6);
      return newDate;
    });
  };

  // Format the month and year for display
  const monthYear = startOfWeek.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className=" p-5">
      {/* Header with Month, Year, and Navigation Buttons */}
      <div className="flex mb-7">
        <div className="text-2xl font-bold w-52">{monthYear}</div>
        <div className="flex gap-3">
          <button
            className="bg-gray-200 text-black px-1 rounded-md flex items-center justify-center"
            onClick={handlePrevWeek}
          >
            <MdKeyboardArrowLeft size={15} />
          </button>
          <button
            className="bg-gray-200 text-black px-1 rounded-md flex items-center justify-center"
            onClick={handleNextWeek}
          >
            <MdKeyboardArrowRight size={15} />
          </button>
        </div>
      </div>
      {listWay ? (
        <div className="flex flex-col gap-4 overflow-x-hidden overflow-y-scroll h-[500px]">
          {weekData.map((day, index) => (
            <div
              key={index}
              className={`${
                day.date === today ? "bg-[#9fade0]" : "bg-[#d4d5da]"
              } rounded-lg  flex gap-4 items-start gap-y-3 p-2`}
            >
              {/* Date */}
              <div className="flex flex-col w-24 text-center font-semibold">
                <div className="text-lg">
                  {new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </div>
                <div className="text-xl">{new Date(day.date).getDate()}</div>
              </div>
              {day.patients.length === 0 ? (
                <div className="text-center text-gray-500 w-full">
                  No events
                </div>
              ) : (
                <div className="flex-1 flex flex-col gap-2">
                  {/* Appointments */}
                  {day.patients.map((appointment, apptIndex) => (
                    <div
                      key={apptIndex}
                      className="flex items-center justify-between border p-2 rounded-md bg-gray-50"
                    >
                      <div className="flex-1">
                        <div className="font-semibold">
                          {appointment.patient}
                        </div>
                        <div className="text-sm text-gray-700">
                          {appointment.type}
                        </div>
                        <div className="text-xs text-gray-500">
                          {appointment.time}
                        </div>
                      </div>
                      <div className="flex gap-2 relative">
                        <button className="bg-btnSecondary text-white px-2 py-1 rounded-md text-xs">
                          Cancel
                        </button>
                        <button className="bg-btnPrimary text-white px-2 py-1 rounded-md text-xs">
                          Reschedule
                        </button>
                        <MdMoreVert
                          size={24}
                          className=" cursor-pointer"
                          onClick={handleOpenCard}
                        />
                        {openPatient && (
                          <div className=" absolute top-0 right-0 w-[57vw] h-[100vh]">
                            <AppointmentDetails onClose={handleCloseCard} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-hidden overflow-y-scroll h-[380px]">
          {/* Header for days of the week */}
          <div className="flex">
            {/* Placeholder for the time column header */}
            <div className="flex-shrink-0 text-center p-2 border-r w-24"></div>
            {weekData.map((day, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-40 text-center p-2 border-r flex justify-center `}
              >
                <div
                  className={`${
                    day.date === today ? "bg-[#172F85]" : ""
                  } rounded-lg w-16 h-full flex flex-col gap-y-3 py-2`}
                >
                  <div
                    className={`${
                      day.date === today
                        ? "bg-[#172F85] text-yellow-50"
                        : "bg-slate-100"
                    } text-sm`}
                  >
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </div>
                  <div
                    className={`${
                      day.date === today ? "bg-[#172F85] text-yellow-50" : ""
                    } text-xl font-semibold`}
                  >
                    {new Date(day.date).getDate()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main content with time slots and appointments */}
          <div className="flex">
            {/* Time column */}
            <div className="flex-shrink-0 flex flex-col gap-3">
              {timeSlots.map((time, idx) => (
                <div
                  key={idx}
                  className="min-h-20 flex items-center justify-center border-r w-24 "
                >
                  {time}
                </div>
              ))}
            </div>

            {/* Appointments for each day */}
            {weekData.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="flex-shrink-0 w-40 flex flex-col gap-3  "
              >
                {timeSlots.map((timeSlot, idx) => {
                  // Find appointments that start at either the full hour or half past the hour
                  const appointments = day.patients.filter((appt) => {
                    const appointmentHour = parseInt(appt.time.split(":")[0]);
                    const appointmentMinutes = parseInt(
                      appt.time.split(":")[1]
                    );
                    const timeSlotHour = parseInt(timeSlot.split(":")[0]);

                    // Match appointments that fall within the hour block
                    return (
                      appointmentHour === timeSlotHour &&
                      (appointmentMinutes >= 0 || appointmentMinutes <= 59)
                    );
                  });
                  return (
                    <div
                      key={idx}
                      className="min-h-20 border-r pr-2 overflow-hidden h-full flex flex-col gap-y-2 "
                    >
                      {appointments.map((appointment, appointmentIndex) => (
                        <div
                          key={appointmentIndex}
                          className={`flex justify-between h-full border-l-4 rounded-md ${
                            appointment.isMember
                              ? "bg-orange-100 border-btnSecondary"
                              : "bg-blue-100 border-blue-900"
                          }`}
                        >
                          <div className="flex flex-col w-[80%]">
                            <div className="text-sm font-semibold truncate">
                              {appointment.patient}
                            </div>
                            <div className="text-xs text-gray-700 truncate">
                              {appointment.type}
                            </div>
                          </div>
                          <MdMoreVert
                            size={24}
                            className="cursor-pointer"
                            onClick={handleOpenCard}
                          />
                          {openPatient && (
                            <div className="fixed top-0 right-0 w-[57vw] h-[100vh] z-50">
                              <AppointmentDetails onClose={handleCloseCard} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
// Sample data
const appointmentsData = [
  {
    date: "2024-07-29",
    patients: [
      { time: "12:00", patient: "Mike Robin", type: "Consultation" },
      {
        time: "14:00",
        patient: "Jane Black",
        type: "Wisdom Teeth Removal",
        isMember: true,
      },
      { time: "11:30", patient: "John Doe", type: "Checkup" },
    ],
  },
  {
    date: "2024-08-05",
    patients: [
      {
        time: "11:00",
        patient: "Esther Wilson Esther Wilson Esther Wilson",
        type: "Bleaching",
        isMember: true,
      },
      { time: "12:30", patient: "Andy Mcconnell", type: "Scaling" },
      { time: "1:45", patient: "Melisa Cooper", type: "Consultation" },
      { time: "1:30", patient: "Chris Evans", type: "Follow-up" },
    ],
  },
];

// Main App component
const Appointment = () => {
  const [listWay, setListWay] = useState(true);

  return (
    <div className="w-full flex-1 p-8 text-primary static ">
      <div className="flex justify-between  mb-8">
        <div className="flex justify-center items-center gap-6 text-sm">
          <h2 className="text-3xl font-semibold">Appointment</h2>
          <div className="flex justify-center items-end gap-3 text-sm h-full">
            <div
              onClick={() => setListWay(true)}
              className={`cursor-pointer text-sm ${
                listWay ? "text-primary font-bold" : "text-gray-500"
              }`}
            >
              List
            </div>
            <div
              onClick={() => setListWay(false)}
              className={`cursor-pointer text-sm ${
                !listWay ? "text-primary font-bold" : "text-gray-500"
              }`}
            >
              Calendar
            </div>
          </div>
        </div>
        <Topbutton/>
      </div>
      <div className="bg-gray-50 rounded-lg ">
        <Calendar data={appointmentsData} listWay={listWay} />
      </div>
    </div>
  );
};

export default Appointment;
