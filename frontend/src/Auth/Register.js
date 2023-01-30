import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = require("./config.json");

 export default function Registration() {
  const notify = () => toast("You have successfully registered!");

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
        navigate("/home", { replace: true });
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

          
            


<div>
  

<div className="grid grid-rows-1 grid-flow-col gap-4" style={{ color: "black" }}>

    <div>
        <input
        style={{ color: "black" }}
          type="radio"
          value="Customer"
          checked={role === 'Customer'}
          onChange={handleChange}
        /> Customer
      </div>
      <div>
        <input
        style={{ color: "black" }}
          type="radio"
          value="Admin"
          checked={role === 'Admin'}
          onChange={handleChange}
        /> Admin
      </div>
      <div>
        <input
        style={{ color: "black" }}
          type="radio"
          value="event_planner"
          checked={role === 'event_planner'}
          onChange={handleChange}
        /> Event Planner 
      </div>

</div>

    
</div>



                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900" onClick={()=> {navigate('/Login', {replace:true})}}
                                href="#"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
<<<<<<< HEAD
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out btn-primary border border-transparent rounded-md active:btn-primary false"
                                onClick={() => navigate("/login",{replace:true})}
=======
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out btn-primary border border-transparent rounded-md active:btn-primary false" 
                                onClick={notify}
>>>>>>> 3fc8b1860297f227c38d83c4ef4f3f5aec2b1ab7
                            >
                                Register
                            </button>
                            <ToastContainer />
                        </div>
                    
          </form>
        </div>
      </div>
    </div>
  );
}
