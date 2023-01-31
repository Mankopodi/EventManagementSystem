import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
const config = require("./config.json");


export default function Login() {

  const notify = () => toast("You have successfully logged in!");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const navigate = useNavigate();


  

  // console.log(`email ${email} password ${password} user role ${role}`);
  const login = async (e) => {
    e.preventDefault();

    const data = {
      identifier: email,
      password: password,
      myUserRoles: role,
    };
    console.log(data);

    await axios
      .post(`${config.dev_url}/api/auth/local`, {
        identifier: email,
        password: password,
        // myUserRoles: role,
      })
      .then((response) => {


        console.log("Well done!");
        console.log("User profile", response);
        localStorage.setItem("user_role: ", response.data.user.myUserRoles);
        // console.log("User token", response.data.jwt);
        // navigate("/admindash/homepage", { replace: true });
        // const { jwt, user } = response.data.data;
        let jwt = response.data.jwt
         
          console.log(jwt);
          // setToken(jwt);
          // const token = localStorage.getItem("jwt");
          let decoded = jwt_decode(jwt);
          let ID = decoded.id;

          axios
            .get(`${config.dev_url}/api/users/${ID}?populate=*`)
            .then((data) => {
              console.log("role ", data.data.role.id);

              if (data.data.role.id === 4) {
                navigate("../dash/home");
              }
              if (data.data.role.id === 5) {
                navigate("/dashboard/homes");
              }
              if (data.data.role.id === 3) {
                navigate("/admindash/homepage", { replace: true });
              }
             
            })
            .catch((error) => {
              console.log(error);
            });
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto rounded-xl shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black ">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={login}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-black focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black"
            >
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 btn-primaryborder rounded-md focus:border-black focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            to={"/forgot-password"}
            className="text-xs text-black hover:underline font-semibold"
          >
            Forget Password?
          </Link>

          <div className="mt-6">
            <button 
              className="w-full px-4 py-2 tracking-wide text-white  transform rounded-md  focus:outline-none btn btn-accent" 
              onClick={notify}
            >
              Login
            </button>
            <ToastContainer />
          </div>
        </form>

        <p className="mt-8 text-xs font-semibold text-center text-black">
          {" "}
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-semibold text-black hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
