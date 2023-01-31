import React, { useState } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";
import { useNavigate } from "react-router-dom";

function Bookings() {
  const navigate = useNavigate();

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
  const [bookingData, setBookingData] = useState("");

  const bookEvent = (e) => {
    e.preventDefault();

    const bookingData = {
      data: {
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
      },
    };

    console.log(bookingData);

    axios
      .post("http://localhost:1337/api/bookings", bookingData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/dash/Payment");
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:1337/api/bookings", bookingData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/dash/Payment");
      })
      .catch((err) => {
        console.log(err);
      });


  };

  return (
    <div className="hero min-h-screen font-bold" style={{ color: "white" }}>
      <div className="card w-11/12  shadow-xl  mt-8 ">
        <div className="card-body">
          <p className="color" style={{ color: "black" }}>
            Please fill in this form to make your booking.
          </p>
          <form>
            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>First Name:</span>
              </label>
              <label className="label">
              
                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Type here"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>

            <div className="form-control mb-0">
              <label className="label">
                <span style={{ color: "black" }}>Last Name:</span>
              </label>
              <label className="label">
             
                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Type here"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Email:</span>
              </label>
              <label className="label">
              
                <input
                  style={{ color: "black" }}
                  type="email"
                  placeholder="info@site.com"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Phone Number:</span>
              </label>
              <label className="label">
              
                <input
                  style={{ color: "black" }}
                  type="number"
                  placeholder="Type here"
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Group Name:</span>
              </label>
              <label className="label">
             
                <input
                  style={{ color: "black" }}
                  type="text"
                  placeholder="Type here"
                  value={GroupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Number of Guests:</span>
              </label>
              <label className="label">
               
                <input
                  style={{ color: "black" }}
                  type="number"
                  placeholder="Type here"
                  value={NumberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Date:</span>
              </label>
              <label className="label">
             
                <input
                  style={{ color: "black" }}
                  type="date"
                  placeholder="Type here"
                  value={eventDate}
                  onChange={(e) => setDate(e.target.value)}
                  className="input input-bordered "
                  required
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Event Type:</span>
              </label>
              <label className="label">
              
                <select
                  style={{ color: "black" }}
                  className="select w-md max-w-md"
                  value={EventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option disabled selected>
                    Select your event
                  </option>
                  <option style={{ color: "black" }}>Wedding</option>
                  <option style={{ color: "black" }}>Party</option>
                  <option style={{ color: "black" }}>Conference</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Venue:</span>
              </label>
              <label className="label">
               
                <select
                  style={{ color: "black" }}
                  className="select w-md max-w-md"
                  value={Venue}
                  onChange={(e) => setVenue(e.target.value)}
                >
                  <option disabled selected>
                    Select the venue for your event
                  </option>
                  <option>Conference Kraal 3</option>
                  <option>Sunset Boardroom</option>
                  <option>Executive Boardroom</option>
                  <option>The garden venue hotel</option>
                  <option>Pheasant Hill</option>
                  <option>The Sweet Arch</option>
                  <option>Hakunamatata</option>
                  <option>Verenda House</option>
                  <option>Taboo</option>
                </select>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span style={{ color: "black" }}>Package:</span>
              </label>
              <label className="label">
                
                <select
                  style={{ color: "black" }}
                  className="select w-md  max-w-md"
                  value={Package}
                  onChange={(e) => setPackage(e.target.value)}
                >
                  <option disabled selected>
                    Select a Pactage
                  </option>
                  <option>Premium</option>
                  <option>Classic</option>
                  <option>Deluxe</option>
                  <option>Standard</option>
                  <option>Stay-Over</option>
                  <option>For Adults</option>
                  <option>For Kids</option>
                  <option>Baby/Bridal Shower</option>
                </select>
              </label>
            </div>

            <button
              className="btn btn-primary mt-8"
              style={{ color: "black" }}
              onClick={bookEvent}
            >
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
