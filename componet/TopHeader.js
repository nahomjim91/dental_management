"use client";

import { FaBell } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full p-2 bg-gray-50 shadow-md ">
      {/* top section */}
      <div className="w-full flex justify-end mb-4">
        <fieldset className="w-full space-y-1 ">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm sm:w-auto focus:outline-none  text-gray-800 bg-gray-50 rounded-xl"
            />
          </div>
        </fieldset>
        <div className="flex gap-3 items-center w-1/4">
          <FaBell className="text-gray-600" size={17} />
          <div className="flex items-center space-x-4">
            <img
              src="https://primaeri.com/_next/image?url=https%3A%2F%2Fupload.primaeri.com%2FImages%2F1719940381642-photo_2024-06-05_18-35-29.webp&w=1920&q=75"
              alt="Dr. Miguel"
              className="w-10 h-10 rounded-xl"
            />
            <div>
              <p className="text-sm font-medium">Dr. Miguel Connelly</p>
              <p className="text-xs text-gray-600">Practical Dentist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
