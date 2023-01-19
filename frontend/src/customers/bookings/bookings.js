import React from 'react';

function bookings() {

  return (

    <div className="hero min-h-screen">
      <div className='card w-96 bg-base-100 shadow-xl  mt-8 '>
        <div className='card-body'>
        <p>Please fill in this form to make your booking.</p>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name:</span>
            </label>
            <label className="input-group">
              <span>First Name</span>
              <input type="text" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name:</span>
            </label>
            <label className="input-group">
              <span>Last Name</span>
              <input type="text" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input type="email" placeholder="info@site.com" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number:</span>
            </label>
            <label className="input-group">
              <span>Phone Number</span>
              <input type="number" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Group Name:</span>
            </label>
            <label className="input-group">
              <span>Group Name</span>
              <input type="text" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Type:</span>
            </label>
            <label className="input-group">
              <span>Event Type</span>
              <input type="text" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Number of Guests:</span>
            </label>
            <label className="input-group">
              <span>Number of Guests</span>
              <input type="number" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date:</span>
            </label>
            <label className="input-group">
              <span>Date</span>
              <input type="date" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Venue:</span>
            </label>
            <label className="input-group">
              <span>Venue</span>
              <input type="text" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Package:</span>
            </label>
            <label className="input-group">
              <span>Package</span>
              <input type="text" placeholder="Type here" className="input input-bordered input-md" required />
            </label>
          </div>

          <button className="btn btn-primary mt-8">Book</button>
        </form>
        </div>
      </div>
    </div>



  )
}

export default bookings
