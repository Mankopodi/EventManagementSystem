import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';


function ReportEvents() {
  

  const {state} = useLocation();

  console.log(state);



  return (
    <div className='min-h-screen'>
      <div className='info mt-2'>
      <h1 className='font-semibold ml-8' style={{ color: "black" }} >Name of the Event:</h1>
      <h1 className='font-semibold ml-8' style={{ color: "black" }} >Date of the Event:</h1>
      <h1 className='font-semibold ml-8' style={{ color: "black" }} >Venue of the Event:</h1>
      <h1 className='font-semibold ml-8' style={{ color: "black" }} > Total Number Of Guests:</h1>
      </div>

      <div className='desc mt-8'>
        <h1 className='flex justify-center font-bold text-4xl' style={{ color: "black" }} >Objective of the event</h1>
      </div>
    </div>
  )
}

export default ReportEvents;
