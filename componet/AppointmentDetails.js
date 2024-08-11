"use client"
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbNotes } from "react-icons/tb";
import { motion } from "framer-motion";

function AppointmentDetails({ onClose }) {
  const [selectedSection, setSelectedSection] = useState(1);
  const menuVariants = {
    hidden: {
      x: "100%",
    },
    show: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  const handleSectionClick = (sectionNumber) => {
    setSelectedSection(sectionNumber);
  };
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate={"show"}
      className=" fixed top-0 right-0 w-[57vw] h-[100vh] bg-white py-5 px-7 flex gap-10 flex-col text-primary z-30"
    >
      {/* header */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold"> Appointment Details</h3>
        <IoMdClose
          onClick={onClose}
          className="text-2xl cursor-pointer text-stone-600"
        />
      </div>

      {/* about */}
      <div className="flex  items-center justify-between py-6 border-y-2 ">
        <div className=" flex items-center gap-4">
          <img
            src="https://primaeri.com/_next/image?url=https%3A%2F%2Fupload.primaeri.com%2FImages%2F1719940381642-photo_2024-06-05_18-35-29.webp&w=1920&q=75"
            alt="Dr. Miguel"
            className="w-14 h-16 object-cover rounded-sm"
          />
          <div className="flex flex-col gap-2  items-start">
            <h3 className="text-lg font-semibold "> Selihom Kidane</h3>
            <div className=" px-1 pb-1 bg-[#F9796D] rounded-sm text-white ">
              member
            </div>
          </div>
        </div>
        <div className="flex  items-center gap-10">
          <div className="flex flex-col items-center">
            <div className=" font-bold">12</div>
            <div className="text-stone-600">Past</div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" font-bold">4</div>
            <div className="text-stone-600">upcoming</div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" font-bold text-[#F9796D]">4.9</div>
            <div className="text-stone-600">Tooth case</div>
          </div>
        </div>
        <div className="bg-btnPrimary text-white px-4 py-2 rounded-xl">
          Reschedule
        </div>
      </div>
      {/* details */}
      <div className="w-full relative">
        <div className="flex gap-10 ">
          <h4
            className={`cursor-pointer ${
              selectedSection === 1
                ? "font-bold text-primary"
                : "text-stone-600"
            }`}
            onClick={() => handleSectionClick(1)}
          >
            Basic info
          </h4>
          <h4
            className={`cursor-pointer ${
              selectedSection === 2
                ? "font-bold text-primary"
                : "text-stone-600"
            }`}
            onClick={() => handleSectionClick(2)}
          >
            Treatment timeline
          </h4>
          <h4
            className={`cursor-pointer ${
              selectedSection === 3
                ? "font-bold text-primary"
                : "text-stone-600"
            }`}
            onClick={() => handleSectionClick(3)}
          >
            Note
          </h4>
          <h4
            className={`cursor-pointer ${
              selectedSection === 4
                ? "font-bold text-primary"
                : "text-stone-600"
            }`}
            onClick={() => handleSectionClick(4)}
          >
            Docoment
          </h4>
        </div>
         <div className="w-full pl-4 py-6 mx-auto h-[400px] overflow-y-scroll">
          <div className=" col-span-12 px-4 space-y-6 sm:col-span-9 ">
            <div  className="col-span-12 space-y-12 relative pl-4 sm:col-span-8 sm:space-y-2 sm:before:absolute sm:before:top-6 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
          {[1, 2, 3, 4, 5].map((item) => (
               <div key={item} className="  bg-slate-200  flex rounded-md sm:relative sm:before:absolute sm:before:top-5 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
               <div className="flex justify-between w-full py-4 px-2 ">
                 <div>
                   <div className=" font-bold">2024-07-29</div>
                   <div className=" text-sm">12:00</div>
                 </div>
                 <div>
                   <div className=" text-sm">Treatment</div>
                   <div className=" font-bold">Bleaching</div>
                 </div>
                 <div>
                   <div className=" text-sm">Dentist</div>
                   <div className=" font-bold">Dr. Miguel Connelly</div>
                 </div>
                 <div className="flex items-center gap-3">
                   <TbNotes size={30} />
                   <div>Note</div>
                 </div>
               </div>
             </div>
                ))}
            </div>
          </div>
        </div> 

      </div>
    </motion.div>
  );
}

export default AppointmentDetails;
