import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const config = require("./config.json");

 export default function Registration() {

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [role, setRole] = React.useState("customer");
 const [gender, setGender] = React.useState('male');

 const navigate = useNavigate();
 const handleChange = (event) => {  
      
    setRole(event.target.value)
   console.log(event.target.value);
 }


  const Register = async (e) => {
    e.preventDefault();

    const data = {
      username: name,
      email: email,
      password: password,
      myUserRoles: role,
    };
    console.log(data);

    await axios
      .post("http://localhost:1337/api/users", data)
      .then((response) => {
        console.log("Well done!", response);
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  useEffect(()=>{
    console.log(role)
  },[role])

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0 ">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-black mt-20 " style={{color:'white'}}>Register</h3>
          </a>
        </div>
        <div className="w-full p-6 m-auto rounded-xl shadow-xl lg:max-w-xl">

          <form className="mt-6" onSubmit={Register}>

            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-black"
              >
                Name:
              </label>
              
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-black focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black undefined"
              >
                Email:
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-black focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-black undefined"
              >
                Password:
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-black focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-semibold text-black undefined"
              >
                Confirm Password:
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-black focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            {/*  */}
            <h3 className="font-semibold text-black">Select Role:</h3>

            <input
              type="radio"
              name="customer"
              value="customer"
              id="customer"
             className="mask mask-circle"
              // disabled={role !== ''}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label htmlFor="customer" className="font-semibold text-black mr-4">Customer</label>

{/*  */}
<div>
    <h3 className="text-gray-600" >Select Admin?</h3>
<div>


</div>

<div className="grid grid-rows-1 grid-flow-col gap-4">

    <div>
        <input
          type="radio"
          value="Customer"
          checked={role === 'Customer'}
          onChange={handleChange}
        /> Customer
      </div>
      <div>
        <input
          type="radio"
          value="Admin"
          checked={role === 'Admin'}
          onChange={handleChange}
        /> Admin
      </div>
      <div>
        <input
          type="radio"
          value="event_planner"
          checked={role === 'event_planner'}
          onChange={handleChange}
        /> event_planner
      </div>

</div>

    
</div>

<label className="text-gray-600" htmlFor="eventPlanner">Event Planner</label>

                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900" onClick={()=> {navigate('/Login', {replace:true})}}
                                href="#"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out btn-primary border border-transparent rounded-md active:btn-primary false" onClick={()=> {navigate('/Home', {replace:true})}}
                            >
                                Register
                            </button>
                        </div>
                    
          </form>
        </div>
      </div>
    </div>
  );
}
