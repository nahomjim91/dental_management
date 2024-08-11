"use client";
import { LuChevronRight } from "react-icons/lu";
import Topbutton from "@/componet/Topbutton"
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

export const PatientInfoCard = () => {
  return (
    <div class="w-[250px] h-full bg-white border border-gray-200 rounded-lg shadow ">
      <div class="flex flex-col items-center py-4 gap-y-1 ">
        <img
          class="w-20 h-24 mb-3 rounded-xl shadow-lg object-cover "
          src="https://primaeri.com/_next/image?url=https%3A%2F%2Fupload.primaeri.com%2FImages%2F1719940381642-photo_2024-06-05_18-35-29.webp&w=1920&q=75"
          alt="Bonnie "
        />
        <h5 class="mb-1 text-xl font-semibold    ">
          Bonnie Green
        </h5>
        <div className="flex gap-10 ">
          <div className="flex flex-col items-center">
            <div className=" font-bold">12</div>
            <div className="text-stone-600">Past</div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" font-bold">4</div>
            <div className="text-stone-600">upcoming</div>
          </div>
        </div>

        <div class="flex mt-4 md:mt-6 ">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 "
          >
            Add friend
          </a>
          <a
            href="#"
            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
};
export const GeneralInfo = () => {
  return (
    <div class="w-[400px] h-full bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col gap-3 ">
      <h1 className="text-lg font-bold">General Info</h1>
      <div className="flex flex-col gap-6 its w-full ">
        <div className="flex gap-20 w-full ">
          <div className="flex flex-col items-start">
            <div className="text-stone-600 text-sm">Gender</div>
            <div className=" font-bold">Female</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-stone-600 text-sm">Birthday</div>
            <div className=" font-bold">25.02.2000</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-stone-600 text-sm">Age</div>
            <div className=" font-bold">24 yo</div>
          </div>
        </div>
        <div className="flex gap-10 w-full ">
          <div className="flex flex-col items-start">
            <div className="text-stone-600 text-sm">Phone</div>
            <div className=" font-bold">0909090909</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-stone-600 text-sm">Email</div>
            <div className=" font-bold">John@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-10 w-full ">
          <div className="flex flex-col items-start">
            <div className="text-stone-600 text-sm">Member Status</div>
            <div className=" font-bold">not member</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-stone-600 text-sm">Registered Date</div>
            <div className=" font-bold">25/02/2000</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const NotesCard = () => {
  return (
    <div class="w-[350px] h-full bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col gap-3 ">
      <div className="flex justify-between ">
        <h1 className="text-lg font-bold">Note</h1>
        <div className="flex gap-1 items-center cursor-pointer">
          <Link href={"/notes"}>see all</Link>
          <LuChevronRight />
        </div>
      </div>
      <div className="w-full  h-full bg-gray-100 p-4 text-sm flex flex-col gap-3">
        <p>
          href attribute requires a valid value to be accessible. Provide a
          valid, navigable address as the href value. If you cannot provide a
          valid href, but still need the element
        </p>
        <div className="flex justify-end">
          <div className="text-white cursor-pointer bg-btnPrimary text px-5 text-base rounded-md">
            {" "}
            Edit
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full ">
        <div className=" font-bold">Veterinar</div>
        <div className="flex justify-between items-end h-full w-full  ">
          <div className="text-stone-600 text-sm">Dr. Miguel Connelly</div>
          <div className=" text-sm">25/02/2000</div>
        </div>
      </div>
    </div>
  );
};

export const PatientAppointment = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const handleSectionClick = (sectionNumber) => {
    setSelectedSection(sectionNumber);
  };
  return (
    <div class="w-[690px] h-full bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col gap-3 ">
      <div className="flex gap-10 ">
        <h4
          className={`cursor-pointer ${
            selectedSection === 1 ? "font-bold text-primary" : "text-stone-600"
          }`}
          onClick={() => handleSectionClick(1)}
        >
          Upcoming
        </h4>
        <h4
          className={`cursor-pointer ${
            selectedSection === 2 ? "font-bold text-primary" : "text-stone-600"
          }`}
          onClick={() => handleSectionClick(2)}
        >
          History
        </h4>
      </div>
      <div className="w-full pl-4 py-6 mx-auto h-[350px] overflow-y-scroll">
        <div className=" col-span-12 px-4  ">
          <div className="col-span-12 space-y-12 relative pl-4 sm:space-y-2 sm:before:absolute sm:before:top-6 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div
                key={item}
                className=" bg-slate-200  flex rounded-md sm:relative sm:before:absolute sm:before:top-6 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600"
              >
                <div className="flex justify-between w-full py-2 px-2 ">
                  <div>
                    <div className=" font-semibold">2024-07-29</div>
                    <div className=" text-sm">12:00</div>
                  </div>
                  <div>
                    <div className=" text-sm">Treatment</div>
                    <div className=" font-semibold">Bleaching</div>
                  </div>
                  <div>
                    <div className=" text-sm">Dentist</div>
                    <div className=" font-semibold">Dr. Miguel Connelly</div>
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
  );
};

export const DocomentsCard = () => {
  return (
    <div class="w-[350px] h-full bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col gap-3 ">
      <div className="flex justify-between ">
        <h1 className="text-lg font-bold">Docoments</h1>
        <div className="flex gap-1 items-center cursor-pointer">
          <Link href={"/docmentlists"}>see all</Link>
          <LuChevronRight />
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          id="multiple_files"
          type="file"
          multiple
        />
        <button
          class="px-4 py-2 text-white bg-blue-900 rounded-lg hover:bg-btnPrimary hover:border-primary "
          type="submit"
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col justify-between items-center gap-2 h-[300px] overflow-y-scroll pr-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="flex items-center gap-4 w-full">
            <div className=" h-full bg-orange-200 p-2 rounded-md">
              <IoDocumentTextOutline size={30} color="orange" />
            </div>
            <div className="flex flex-col justify-start w-full ">
              <h3 className=" font-semibold">check up result pdf</h3>
              <div className="flex text-sm justify-between text-secondary ">
                <p>4.2mb</p>
                <p className="tracking-tight">Aug 22, 2022 at 11:00 am</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function PatientDetails() {
  return (
    <div className="w-full flex-1 p-8 text-primary ">
      <div className="flex justify-between  mb-8">
        <div className="flex justify-center items-center gap-6 text-sm">
          <h2 className="text-3xl font-semibold">Patient Details</h2>
        </div>
        <Topbutton />
      </div>
      <div className="flex justify-between ">
        <div className=" rounded-lg">
          <PatientInfoCard />
        </div>
        <div className="rounded-lg">
          <GeneralInfo />
        </div>
        <div className="rounded-lg">
          <NotesCard />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <PatientAppointment />
        <DocomentsCard />
      </div>
    </div>
  );
}

export default PatientDetails;
