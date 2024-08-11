"use client"
import React, { useState } from 'react'

import MakeAppointment from "./MakeAppointment";
import AddPatientForm from "./AddPatient";

function Topbutton() {
    const [MakeAppointmentDialoge, setmakeAppointmentDialoge] = useState(false);
    const [AddPatientFormDialoge, setAddpatientDialoge] = useState(false);
  
    const handleOpenCardMakeAppointmentDialog = () => {
      setmakeAppointmentDialoge(true);
    };
  
    const handleCloseCardMakeAppointmentDialog = () => {
      setmakeAppointmentDialoge(false);
    };
    const handleOpenCardAddPatientFormDialoge = () => {
      setAddpatientDialoge(true);
    };
  
    const handleCloseCardAddPatientFormDialoge = () => {
      setAddpatientDialoge(false);
    };
  return (
    <div className='flex items-center '>
        
        <div className="flex items-center space-x-4">
          <div className="bg-btnPrimary text-white px-4 py-2 rounded-xl cursor-pointer" onClick={handleOpenCardMakeAppointmentDialog}>
            Make an Appointment
          </div>
          <div className="bg-btnSecondary text-white px-4 py-2 rounded-xl cursor-pointer" onClick={handleOpenCardAddPatientFormDialoge}>
            Add Patient
          </div>
          {MakeAppointmentDialoge && (
        <div className=" absolute top-0 right-0 w-[57vw] h-[100vh]">
          <MakeAppointment onClose={handleCloseCardMakeAppointmentDialog} />
        </div>
      )}
       {AddPatientFormDialoge && (
        <div className=" absolute top-0 right-0 w-[57vw] h-[100vh]">
          <AddPatientForm onClose={handleCloseCardAddPatientFormDialoge} />
        </div>
      )}
        </div>
    </div>
  )
}

export default Topbutton