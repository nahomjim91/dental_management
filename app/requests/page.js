import Image from "next/image";
import Topbutton from "@/componet/Topbutton";

function ResuestList() {
  return (
    <div className="w-full flex-1 p-8 text-primary static ">
    <div className="flex justify-between  mb-8">
      <div className="flex justify-center items-center gap-6 text-sm">
        <h2 className="text-3xl font-semibold">Requests</h2>
        
      </div>
      <Topbutton/>
    </div>
      <div className="bg-gray-50 rounded-lg">
        <section className=" bg-white rounded-lg shadow-md">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className="flex justify-between items-center pb-2">
              <h2 className="mb-4 text-2xl font-semibold leading-tight  ">
                10 Total Request
              </h2>
              <div className="flex gap-1 items-center  ">
                <label className="block mb-2 ml-2 text-sm font-bold  dark:text-white">
                  sorted by
                </label>{" "}
                <select
                  defaultValue={"Selihom Kidane"}
                  id="coundivies"
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
              <div className="w-full text-xs flex flex-col gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-md tracking-wide"
                  >
                    <div className="flex gap-3 py-2 px-3 items-center">
                      <div className=" flex-shrink-0 w-12 h-12">
                        <Image
                          src="https://primaeri.com/_next/image?url=https%3A%2F%2Fupload.primaeri.com%2FImages%2F1719940381642-photo_2024-06-05_18-35-29.webp&w=1920&q=75"
                          alt="Dr. Miguel"
                          className="w-12 h-12 rounded-xl object-cover"
                          width={12}
                          height={12}
                        />
                      </div>
                      <div className="flex-1 ml-4">
                        <p className="text-sm font-semibold tracking-wide">
                          Selihom Kidane
                        </p>
                      </div>
                      <div className="flex-1">
                        <p>0909090909</p>
                      </div>
                      <div className="flex-1">
                        <p>22 yo</p>
                      </div>
                      <div className="flex-1">
                        {index % 2 !== 0 ? (
                          <p className="px-1 pb-1 bg-[#F9796D] rounded text-white w-1/2 flex justify-center">
                            Member
                          </p>
                        ) : (
                          <p className=" text-secondary">not a member</p>
                        )}
                      </div>
                      <div className="flex-1">
                        {index % 2 === 0 ? <p>11/8/2024</p> : <p>-</p>}
                      </div>
                      <div className="flex-1">
                        {index % 2 !== 0 ? <p>11/8/2024</p> : <p>-</p>}
                      </div>
                      <div className="flex-1 bg-btnPrimary h-9 rounded-md text-white flex justify-center items-center text-base cursor-pointer">
                        Accept
                      </div>

                      <div className="flex-1 bg-white h-9 rounded-md text-primary flex justify-center items-center text-base cursor-pointer">
                        Reschedule
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResuestList;
