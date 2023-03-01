import { useState } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";
import { useNavigate } from "react-router-dom";
//import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SUCCESS } from "../../enviroments/toast";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    EventType: "",
    NumberOfGuests: "",
    eventDate: "",
    Venue: "",
  });

  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    const data ={
     data:{
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        Email: formData.Email,
        PhoneNumber: formData.PhoneNumber,
        NumberOfGuests: formData.NumberOfGuests,
        eventDate: formData.EventDate,
        EventType: formData.EventType,
        Venue: formData.Venue
     }
      
    }
    axios
      .post(`${process.env.React_App_URl}/api/bookings`,data, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res);
        SUCCESS("Your booking has been successfully booked!");
        navigate("/dash/history");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default MultiStepForm;

function Step1({ formData, setFormData, onNext }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 card-compact w-3/4">
        <div className="card-body">
          <h1 className="text-3xl font-bold " style={{ color: "black" }}>
            Personal details
          </h1>

          <label htmlFor="FirstName" style={{ color: "black" }}>
            First Name
          </label>
          <input
            className="input input-bordered input-primary w-full"
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="LastName" style={{ color: "black" }}>
            Last Name
          </label>
          <input
            className="input input-bordered input-primary w-full"
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function Step2({ formData, setFormData, onPrevious, onNext }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const validateEmail = (emailData) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailData.email);
  };

  const validatePhone = (phoneData) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneData.PhoneNumber);
  };

  const handleNext = () => {
    const isValidEmail = validateEmail(formData.email);
    const isValidPhone = validatePhone(formData.PhoneNumber);
    if (!isValidEmail) {
      // setEmailError("Please enter a valid email");
      return;
    }
    if (!isValidPhone) {
      // setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }
    const [email, PhoneNumber] = formData;
    onNext({ email, PhoneNumber });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 card-compact w-3/4">
        <div className="card-body">
          <h1 className="font-bold text-3xl" style={{ color: "black" }}>
            Contact Details
          </h1>
          <label htmlFor="Email" style={{ color: "black" }}>
            Email:
          </label>
          <input
            className="input input-bordered input-primary w-full"
            id="Email"
            name="Email"
            type="text"
            placeholder="Type here"
            value={formData.Email}
            onChange={handleChange}
          />
          
          <label htmlFor="PhoneNumber" style={{ color: "black" }}>
            Phone number:
          </label>
          <input
            className="input input-bordered input-primary w-full"
            id="PhoneNumber"
            name="PhoneNumber"
            type="tel"
            placeholder="Type here"
            value={formData.PhoneNumber}
            onChange={handleChange}
          />

          <div className="flex gap-1">
            <button className="btn btn-primary" onClick={onPrevious}>
              Previous
            </button>
            <button className="btn btn-primary" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3({ formData, setFormData, onPrevious, onNext }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 card-compact w-3/4">
        <div className="card-body">
          <h1 className="font-bold text-3xl" style={{ color: "black" }}>
            Booking Info
          </h1>
          <div className="form-control">
            <label className="label">
              <span style={{ color: "black" }}>Number of Guests:</span>
            </label>
            <label className="label">
              <input
                style={{ color: "black" }}
                type="number"
                placeholder="Type here"
                name="NumberOfGuests"
                id="NumberOfGuests"
                value={formData.NumberOfGuests}
                onChange={handleChange}
                className="input input-bordered input-primary w-full"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="EventDate" style={{ color: "black" }}>
              Date:
            </label>
            <input
              className="input input-bordered input-primary w-full"
              id="EventDate"
              name="EventDate"
              type="date"
              placeholder="Type here"
              value={formData.EventDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-1">
            <button className="btn btn-primary" onClick={onPrevious}>
              Previous
            </button>
            <button className="btn btn-primary" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4({ formData, setFormData, onPrevious, onSubmit }) {
  const [EventTypeError, setEventTypeError] = useState(false);
  const [venueError, setVenueError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 card-compact w-3/4">
        <div className="card-body">
          <h1 className="font-bold text-3xl" style={{ color: "black" }}>
            Booking Info
          </h1>
          <label htmlFor="EventType" style={{ color: "black" }}>
            Event Type:
          </label>
          <select
            style={{ color: "black" }}
            className="select select-primary w-full"
            onChange={handleChange}
            name="EventType"
            id="EventType"
            value={formData.EventType}
          >
            <option disabled value="">
              Select your event
            </option>
            <option value="Wedding">Wedding</option>
            <option value="Party">Party</option>
            <option value="Conference">Conference</option>
          </select>
          {EventTypeError && (
            <span className="text-red-500">Please select an event type</span>
          )}
          
          <div>
            <label htmlFor="Venue" style={{ color: "black" }}>
              Venue:
            </label>
            <select
              style={{ color: "black" }}
              className="select select-primary w-full"
              onChange={handleChange}
              name="Venue"
              id="Venue"
              value={formData.Venue}
            >
              <option disabled value="">
                Select the venue for your event
              </option>
              <option value="Conference Kraal 3">Conference Kraal 3</option>
              <option value="Sunset Boardroom">Sunset Boardroom</option>
              <option value="Executive Boardroom">Executive Boardroom</option>
              <option value="The garden venue hotel">
                The garden venue hotel
              </option>
              <option value="Pheasant Hill">Pheasant Hill</option>
              <option value="The Sweet Arch">The Sweet Arch</option>
              <option value="Hakunamatata">Hakunamatata</option>
              <option value="Verenda House">Verenda House</option>
              <option value="Taboo">Taboo</option>
            </select>
            {venueError && (
              <span className="text-red-500">Please select a venue</span>
            )}
          </div>

          <div className="flex gap-1">
            <button className="btn btn-primary" onClick={onPrevious}>
              Previous
            </button>
            <button className="btn btn-primary" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
