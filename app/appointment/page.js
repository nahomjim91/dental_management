"use client"

import React, { useState } from "react";

// Helper function to generate time slots
const generateTimeSlots = () => {
  const times = [];
  for (let hour = 9; hour <= 15; hour++) {
    const time = hour < 10 ? `0${hour}:00` : `${hour}:00`;
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

// Helper function to get the dates of the current week
const getWeekDates = (startOfWeek) => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    dates.push(date);
  }
  return dates;
};

// Calendar component that takes appointments as props
const Calendar = ({ data }) => {
  // State to keep track of the current date (start of the current week)
  const [currentDate, setCurrentDate] = useState(new Date());

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
      newDate.setDate(prevDate.getDate() - 7);
      return newDate;
    });
  };

  // Handler to go to the next week
  const handleNextWeek = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 7);
      return newDate;
    });
  };

  // Format the month and year for display
  const monthYear = startOfWeek.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Header with Month, Year, and Navigation Buttons */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevWeek}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Previous
        </button>
        <div className="text-2xl font-bold">{monthYear}</div>
        <button
          onClick={handleNextWeek}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>

      {/* Header for days of the week */}
      <div className="flex bg-gray-200">
        {/* Placeholder for the time column header */}
        <div className="flex-shrink-0 bg-white text-center p-2 border-b border-r w-24"></div>
        {weekData.map((day, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 bg-white text-center p-2 border-b border-r"
          >
            <div className="font-semibold">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>
            <div className="text-lg">{new Date(day.date).getDate()}</div>
          </div>
        ))}
      </div>

      {/* Main content with time slots and appointments */}
      <div className="flex">
        {/* Time column */}
        <div className="flex-shrink-0">
          {timeSlots.map((time, idx) => (
            <div
              key={idx}
              className="h-20 flex items-center justify-center border-b border-r bg-gray-100 w-24"
            >
              {time}
            </div>
          ))}
        </div>

        {/* Appointments for each day */}
        {weekData.map((day, dayIndex) => (
          <div key={dayIndex} className="flex-shrink-0 w-40 flex flex-col">
            {timeSlots.map((timeSlot, idx) => {
              const appointment = day.patients.find(
                (appt) => appt.time === timeSlot
              );
              return (
                <div
                  key={idx}
                  className={`h-20 border-b border-r p-2 ${
                    appointment
                      ? appointment.isMember
                        ? "bg-orange-200"
                        : "bg-gray-200"
                      : "bg-white"
                  }`}
                >
                  {appointment && (
                    <div className="flex flex-col justify-center h-full">
                      <div className="font-semibold">{appointment.patient}</div>
                      <div className="text-sm text-gray-700">
                        {appointment.type}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
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
    ],
  },
  {
    date: "2024-07-30",
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
  
];

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Calendar data={appointmentsData} />
    </div>
  );
};

export default App;
