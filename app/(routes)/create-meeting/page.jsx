"use client"
import React, { useState } from 'react'
import PreviewMeeting from './_components/PreviewMeeting';
import MeetingForm from './_components/MeetingForm';

function CreateMeeting() {
    const [formValue,setFormValue]=useState();
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {/* Meeting Form  */}
        <div className='shadow-md border h-screen'>
          <MeetingForm setFormValue={(v)=>setFormValue(v)}/>
        </div>
        {/* Preview  */}
        <div className='md:col-span-2'>
              <PreviewMeeting formValue={formValue}/>  
        </div>
    </div>
  )
}

export default CreateMeeting