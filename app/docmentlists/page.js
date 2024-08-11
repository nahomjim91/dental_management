import Topbutton from '@/componet/Topbutton'
import { IoDocumentTextOutline } from 'react-icons/io5'

const Docoment = () => {
    return (
        <div className="flex items-center gap-4 bg-orange-50 p-3 rounded-lg ">
              <div className=" h-full bg-orange-200 p-2 rounded-md">
                <IoDocumentTextOutline size={30} color="orange" className=' cursor-pointer'/>
              </div>
              <div className="flex flex-col justify-start w-full ">
                <h3 className=" font-semibold">check up result pdf</h3>
                <div className="flex text-sm justify-between text-secondary ">
                  <p>4.2mb</p>
                  <p className="tracking-tight">Aug 22, 2022 at 11:00 am</p>
                </div>
              </div>
            </div>
    )
}

function DocomentLists() {
  return (
    <div className="w-full flex-1 p-8 text-primary static ">
    <div className="flex justify-between  mb-8">
      <div className="flex justify-center items-center gap-6 text-sm">
        <h2 className="text-3xl font-semibold">Requests</h2>
        
      </div>
      <Topbutton/>
    </div>
    <div className="gap-3 mt-8 grid grid-cols-2">
  {[1, 2, 3, 4, 5, 6, 7].map((index) => (
    <Docoment key={index} />
  ))}
</div>
</div>  )
}

export default DocomentLists