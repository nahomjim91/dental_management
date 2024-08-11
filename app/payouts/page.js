import { FaDollarSign } from "react-icons/fa";
import Topbutton from "@/componet/Topbutton";
import { MdMoreVert, MdPeopleAlt } from "react-icons/md";

function Payouts() {
  const RevenueToday = 8;
  const totalPatients = 364;
  return (
    <div className="flex-1 p-8 text-primary static ">
      <div className="flex justify-between  mb-8 w-full">
        <div className="flex justify-center items-center gap-6 text-sm">
          <h2 className="text-3xl font-semibold">Payouts Overview</h2>
        </div>
        <Topbutton />
      </div>
      <div className="flex justify-between  w-full overflow-x-hidden overflow-y-scroll h-[500px] ">
        <div className="  w-[60%] ">
          <section className="flex justify-around gap-4 mb-3 w-full ">
            <div className="p-4 bg-white rounded-xl shadow-md flex justify-around items-center gap-2">
              <FaDollarSign
                size={30}
                className=" bg-slate-400 w-12 h-12 p-2 rounded-lg"
              />{" "}
              <div>
                <p className="text-gray-600">Revenue Today</p>
                <p className="text-2xl font-semibold">{RevenueToday}</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md flex justify-around items-center gap-2">
              <div className=" bg-slate-400 w-12 h-12 p-2 rounded-lg flex items-center">
                <FaDollarSign size={30} />
                <FaDollarSign size={30} />
              </div>
              <div className="">
                <p className="text-gray-600">Revenue This Month</p>
                <p className="text-2xl font-semibold">{totalPatients}</p>
              </div>
            </div>
          </section>
          <section className="mb-8 bg-white p-4 shadow-md rounded-lg ">
            <h3 className="text-xl font-semibold ">Revenue TimeLine</h3>
            <div className=" p-2 ">
              <p className="text-gray-600 mb-2">October 2021</p>
              <div className="h-40 flex items-center justify-center bg-blue-100 rounded-lg">
                {/* Chart Placeholder */}
                <p>Chart Placeholder</p>
              </div>
            </div>
          </section>
          <section className=" bg-white rounded-lg shadow-md">
            <div className="container p-2 mx-auto  dark:text-gray-800">
              <h2 className="mb-4 text-2xl font-semibold leading-tight">
                Latest Patients
              </h2>
              <div className="overflow-x-hidden h-[420px] overscroll-y-scroll">
                <div className="w-full text-base flex flex-col gap-2 ">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <div key={index} className="bg-gray-100 rounded-md py-1">
                      <div className="flex gap-3 py-2 px-3 items-center">
                        <div className="flex-1 ml-4">
                          <p className=" font-medium ">Selihom Kidane</p>
                        </div>

                        <div className="flex-1">
                          <p>11/8/2024</p>
                        </div>
                        <div className="flex-1 text-secondary">
                          <p>Root Canal</p>
                        </div>
                        <div className="">
                          <p>$350</p>
                        </div>
                        <div className="">
                          <MdMoreVert size={24} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="w-[35%] h-[880px] bg-white rounded-lg ">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              History
            </h2>
            <div className=" h-[800px] overflow-x-hidden overflow-y-scroll pr-4">
              <div className="flex justify-between text-secondary">
                <p className="flex-1">Date</p>
                <p className="flex-1">Name</p>
                <p className="flex-1 ml-8 text-right">Ammount</p>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <div key={index}  className="flex justify-between text-sm items-center">
                  <div className="py-3 flex-1 font-semibold">
                    <p>14 Jan,11:10</p>
                  </div>
                  <div className="py-3 flex-1 flex flex-col">
                    <p className=" font-semibold">Selihom Kidane</p>
                    <p className=" text-secondary">Root Canal</p>
                  </div>
                  <div className="py-3 flex-1 ml-8 text-right">
                    <p>$350</p>
                  </div>
                </div>
              ))}
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <div key={index}  className="flex justify-between text-sm items-center">
                  <div className="py-3 flex-1 font-semibold">
                    <p>14 Jan,11:10</p>
                  </div>
                  <div className="py-3 flex-1 flex flex-col">
                    <p className=" font-semibold">Selihom Kidane</p>
                    <p className=" text-secondary">Root Canal</p>
                  </div>
                  <div className="py-3 flex-1 ml-8 text-right">
                    <p>$350</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Payouts;
