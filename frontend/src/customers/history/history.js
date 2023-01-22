import React from 'react'

function history() {
  return (
    <div className='min-h-screen'>
      <div className="overflow-x-auto">
        <h1 className='flex justify-center text-4xl font-bold mb-4'>Booking History</h1>
        <table className="table w-full">

          <thead>
            <tr>
            <th>ID</th>
              <th>First Nmae</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Group Name</th>
              <th>Event Type</th>
              <th>Number of Guests</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Packages</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default history
