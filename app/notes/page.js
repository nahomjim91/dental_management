import Topbutton from "@/componet/Topbutton";

const NoteCard = () => {
  return (
    <div class="w-[350px] h-full bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col gap-3 ">
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

function Notes() {
  return (
    <div className="w-full flex-1 p-8 text-primary static ">
    <div className="flex justify-between  mb-8">
      <div className="flex justify-center items-center gap-6 text-sm">
        <h2 className="text-3xl font-semibold">Notes</h2>
        
      </div>
      <Topbutton/>
    </div>
      <div className="flex gap-3 mt-8 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <NoteCard key={item} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
