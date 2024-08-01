import { useState } from "react";
const { MdKeyboardArrowLeft, MdKeyboardArrowRight } = require("react-icons/md");

export const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getStartOfWeek = (date) => {
    // Get the first day of the week (Sunday)
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day; // Adjust to get the first day of the week
    return new Date(startOfWeek.setDate(diff));
  };

  const getWeekDates = (startOfWeek) => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(startOfWeek);
      newDate.setDate(startOfWeek.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  };

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const startOfWeek = getStartOfWeek(currentDate);
  const weekDates = getWeekDates(startOfWeek);
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Month and Year */}
      <div className="text-center text-lg font-bold mb-4 flex justify-between">
        {month} {year}
        {/* Navigation Buttons */}
        <div className="flex gap-1">
          <div
            className="bg-gray-200 text-black p-1 rounded-md"
            onClick={handlePreviousWeek}
          >
            <MdKeyboardArrowLeft />
          </div>
          <div className="bg-gray-200 text-black p-1 rounded-md">
            <MdKeyboardArrowRight onClick={handleNextWeek} />
          </div>
        </div>
      </div>

      {/* Date Display */}
      <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-1 px-2">
        {weekDates.map((date, index) => {
          const isToday = date.toDateString() === new Date().toDateString();
          const dayName = date.toLocaleDateString("default", {
            weekday: "short",
          });
          const dayNumber = date.getDate();
          return (
            <div
              key={index}
              className={`flex group ${
                isToday
                  ? "bg-purple-300 shadow-lg"
                  : "hover:bg-purple-100 hover:shadow-lg"
              } rounded-lg transition-all duration-300 cursor-pointer justify-center w-12`}
            >
              <div className="flex items-center py-1">
                <div className="text-center">
                  <p
                    className={`${
                      isToday
                        ? "text-purple-900"
                        : "text-gray-900 group-hover:text-purple-900"
                    } text-sm transition-all duration-300`}
                  >
                    {dayName}
                  </p>
                  <p
                    className={`${
                      isToday
                        ? "text-purple-900 font-bold"
                        : "text-gray-900 group-hover:text-purple-900"
                    } mt-1 text-xl transition-all duration-300`}
                  >
                    {dayNumber}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export function FormatDate({ date }) {
  // Check if the date is a valid Date object
  if (!(date instanceof Date) || isNaN(date)) {
    return <span>Invalid Date</span>;
  }

  const currentDate = new Date();
  const isToday = date.toDateString() === currentDate.toDateString();

  // Determine the day name and month name
  const dayName = isToday
    ? "Today"
    : date.toLocaleDateString("default", { weekday: "long" });
  const dayNumber = date.getDate();
  const monthName = date.toLocaleDateString("default", { month: "short" });

  // Return the formatted date string
  return <span>{`${dayName}, ${dayNumber} ${monthName}`}</span>;
}
