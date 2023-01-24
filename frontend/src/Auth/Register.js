import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const config = require("./config.json");

export default function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-gray-600" style={{color:'white'}}>Register</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form className="mt-6" onSubmit={Register}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            {/*  */}
            <h3>Select Admin?</h3>

            <input
              type="radio"
              name="customer"
              value="customer"
              id="customer"
              checked={role === "Customer"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label htmlFor="customer">Customer</label>

            <input
              type="radio"
              name="admin"
              value="Admin1"
              id="admin"
              checked={role === "Admin1"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label htmlFor="admin">Admin</label>

            <input
              type="radio"
              name="eventPlanner"
              value="Event_planner"
              id="eventPlanner"
              checked={role === "Event Planner"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label htmlFor="eventPlanner">Event Planner</label>
            {/*  */}
            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900 cursor-pointer"
                onClick={() => navigate("/login", { replace: true })}
              >
                Already registered?
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out btn-primary border border-transparent rounded-md active:btn-primary false"
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
