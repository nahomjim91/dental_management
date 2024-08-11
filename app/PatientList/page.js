import { MdMoreHoriz } from "react-icons/md";
import Topbutton from "@/componet/Topbutton";
import Link from "next/link";

function PatientList() {
  return (
    <div className="w-full flex-1 p-8 text-primary static ">
    <div className="flex justify-between  mb-8">
      <div className="flex justify-center items-center gap-6 text-sm">
        <h2 className="text-3xl font-semibold">Patient List</h2>
        
      </div>
      <Topbutton/>
    </div>
      <div className="bg-gray-50 rounded-lg">
        <section className=" bg-white rounded-lg shadow-md">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className="flex justify-between items-center pb-2">
              <h2 className="mb-4 text-2xl font-semibold leading-tight  ">
                364 Patients Total
              </h2>
              <div className="flex gap-1 items-center  ">
                <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                  sorted by
                </label>{" "}
                <select
                  defaultValue={"Selihom Kidane"}
                  id="countries"
                  className="bg-gray-50 border border-blue-900  text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900   "
                >
                  {/* <option selected>Selihom Kidane</option> */}
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>{" "}
              </div>
            </div>
            <div className="overflow-x-hidden h-[420px] overscroll-y-scroll">
              <table className="w-full text-xs border-separate border-spacing-y-2">
                <thead className="">
                  <tr className="text-left">
                    <th className="p-3">Patient Name</th>
                    <th className="p-3">Phone Number</th>
                    <th className="p-3">Age</th>
                    <th className="p-3">Membership</th>
                    <th className="p-3">Next Appointment</th>
                    <th className="p-3">Last Appointment</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody className="">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-opacity-20 bg-orange-100 rounded-md tracking-wide `}
                    >
                      <td className="px-3 py-2">
                        <div className="flex items-center space-x-4">
                          <img
                            src="https://primaeri.com/_next/image?url=https%3A%2F%2Fupload.primaeri.com%2FImages%2F1719940381642-photo_2024-06-05_18-35-29.webp&w=1920&q=75"
                            alt="Dr. Miguel"
                            className="w-10 h-10 rounded-xl"
                          />
                          <div>
                            <p className="text-sm font-medium tracking-wide">
                              Selihom Kidane
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 ">
                        <p>0909090909</p>
                      </td>
                      <td className="p-3">
                        <p>22 yo</p>
                      </td>
                      <td className="p-3">
                        {index % 2 !== 0 ? (
                          <p className="px-1 pb-1 bg-[#F9796D] rounded-sm text-white w-1/2">
                            Member
                          </p>
                        ) : (
                          <p>not a member</p>
                        )}
                      </td>
                      <td className="p-3">
                        {index % 2 === 0 ? <p>11/8/2024</p> : <p>-</p>}
                      </td>
                      <td className="p-3">
                        {index % 2 !== 0 ? <p>11/8/2024</p> : <p>-</p>}
                      </td>
                      <td className="p-3">
                        <Link href="/appointmentdetails">
                          <MdMoreHoriz size={24} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PatientList;
