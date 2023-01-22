import React, { useState, useEffect } from "react";

function Bookings() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(0);
  const [GroupName, setGroupName] = useState("");
  const [EventType, setEventType] = useState("");
  const [NumberOfGuests, setNumberOfGuests] = useState(0);
  const [eventDate, setDate] = useState("");
  const [Venue, setVenue] = useState("");
  const [Package, setPackage] = useState("");

  const bookEvent = (e) => {
    e.preventDefault();

    const data = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      PhoneNumber: PhoneNumber,
      GroupName: GroupName,
      EventType: EventType,
      NumberOfGuests: NumberOfGuests,
      eventDate: eventDate,
      Venue: Venue,
      Package: Package,
    };

    console.log(data);
  };

  return (
    <div className="hero min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl  mt-8 ">
        <div className="card-body">
          <p>Please fill in this form to make your booking.</p>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name:</span>
              </label>
              <label className="input-group">
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="Type here"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered input-md"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name:</span>
              </label>
              <label className="input-group">
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Type here"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered input-md"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <label className="input-group">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="info@site.com"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered input-md"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number:</span>
              </label>
              <label className="input-group">
                <span>Phone Number</span>
                <input
                  type="number"
                  placeholder="Type here"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input input-bordered input-md"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Group Name:</span>
              </label>
              <label className="input-group">
                <span>Group Name</span>
                <input
                  type="text"
                  placeholder="Type here"
                  value={GroupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="input input-bordered input-md"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Type:</span>
              </label>
              <label className="input-group">
                <span>Event Type</span>
                <select className="select w-md max-w-md">
                value={EventType}
                  onChange={(e) => setEventType(e.target.value)}
                  <option disabled selected>
                    Select your event
                  </option>
                  <option>Wedding</option>
                  <option>Conference</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Number of Guests:</span>
              </label>
              <label className="input-group">
                <span>Number of Guests</span>
                <input
                  type="number"
                  placeholder="Type here"
                  value={NumberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  className="input input-bordered input-md"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date:</span>
              </label>
              <label className="input-group">
                <span>Date</span>
                <input
                  type="date"
                  placeholder="Type here"
                  value={eventDate}
                  onChange={(e) => setDate(e.target.value)}
                  className="input input-bordered input-md"
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Venue:</span>
              </label>
              <label className="input-group">
                <span>Venue</span>
                <select className="select w-md max-w-xs">
                value={Venue}
                  onChange={(e) => setVenue(e.target.value)}
                  <option disabled selected>
                  Select the venue for your event
                  </option>
                  <option>Conference Kraal 3</option>
                  <option>Sunset Boardroom</option>
                  <option>Executive Boardroom</option>
                  <option>The garden venue hotel</option>
                  <option>The Natural Arch</option>
                  <option>The Natural Arch</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Package:</span>
              </label>
              <label className="input-group">
                <span>Package</span>
                <select className="select w-md max-w-xs">
                value={Package}
                  onChange={(e) => setPackage(e.target.value)}
                  <option disabled selected>
                    Select a Pactage
                  </option>
                  <option>Premium</option>
                  <option>Classi</option>
                  <option>Deluxe</option>
                  <option>Standard</option>
                  <option>Stay-Over</option>
                </select>
              </label>
            </div>

            <button className="btn btn-primary mt-8" onClick={bookEvent}>
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bookings;