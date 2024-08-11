import Topbutton from "@/componet/Topbutton"

const DoctorInfoCard = () => {
  return (
    <div class="w-[250px] bg-white border border-gray-200 rounded-lg shadow pb-5">
      <div class="flex flex-col items-center py-4 gap-y-1 ">
        <img
          class="w-24 h-28 mb-3 rounded-xl shadow-lg object-fill "
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Bonnie "
        />
        <h5 class="mb-1 text-xl font-semibold    ">Bonnie Green</h5>
        <span className=" text-secondary">Pritical Dentist</span>
      </div>
    </div>
  );
};

function Doctorlists() {
  return (
    <div className="flex-1 p-8 text-primary fixed ">
      <div className="flex justify-between  mb-8">
        <div className="flex justify-center items-center gap-6 text-sm">
          <h2 className="text-3xl font-semibold">Doctor Lists</h2>
        </div>
        <Topbutton />
      </div>

      <div className="flex flex-wrap gap-4 h-[430px] overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7,8].map((index) => (
          <DoctorInfoCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Doctorlists;
