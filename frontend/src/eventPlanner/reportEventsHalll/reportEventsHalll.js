import React from 'react'

function reportEventsHalll() {
  return (
    <div>
      <div className="min-h-screen justify-center">
      <div className="  justify-center card w-96 bg-base-100 shadow-xl ">
        <div className="card-body"  style={{color:'black'}}>
          <h2 className="card-title"  style={{color:'black'}}>Report for Event Hall</h2>
          <p>Name of the Event: </p>
          <p>Date of the Event: </p>
          <p>Venue of the Event: </p>
          <p>Total number of Guests: </p>
          <div className="objective">

          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default reportEventsHalll
