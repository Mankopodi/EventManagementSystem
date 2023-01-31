// import React, { useState } from 'react'
// // import {Button, Col, Container, Row ,Form} from 'react-bootstrap';
// import axios from 'axios';
// import {Button, Col, Container, Row ,Form} from 'react-bootstrap';
// import "./login.css";

// const config = require('./config.json')

// export default function Login() {
//     const [identifier, setIdentifier] = useState('');
// const [password, setPassword] = useState('');

// let login = ()=>{
//     console.log('password');
//     console.log('identifier');

//     axios.post(`${ config.dev_url}/api/auth/local`, {
//       identifier: identifier,
//       password: password
//     })
//     .then(response => {

//       console.log('Well done!');
//       console.log('User profile', response.data.user);
//       console.log('User token', response.data.jwt);
//     })
//     .catch(error => {

//       console.log('An error occurred:', error.response);
//     });

// }

//     return (

// <Container>
//     <Row>
//       <Col>
//       <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" name="identifier" value= {identifier} onChange={(e)=>{ setIdentifier(e.target.value) }} placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" name = "password" value= {password} onChange={(e)=>{ setPassword(e.target.value)}} placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="button" onClick={ ()=>{ login() } }>
//         Submit
//       </Button>
//     </Form>
//       </Col>
//     </Row>
//   </Container>

//     )
// }

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        console.log("User profile", response.data.user);
        localStorage.setItem("user_role: ", response.data.user.myUserRoles);
        console.log("User token", response.data.jwt);
        navigate("/admindash/homepage", { replace: true });
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  // const data = await response.json();
  // if (data?.error) {
  //       throw data?.error;
  //     } else {
  //       console.log(data.user.userType === "customer");
  //       if (data.user.userType === "customer") {
  //         // set the token
  //         setToken(data.jwt);

  //         // set the user
  //         setUser(data.user);

  //         // message.success(Welcome back ${data.user.username}!);

  //         navigate("/dash/home", { replace: true });


  //       } else if (data.user.userType === "event planner") {
  //         // set the token
  //         setToken(data.jwt);

  //         // set the user
  //         setUser(data.user);

  //         //message.success(Welcome back ${data.user.username}!);

  //         navigate("/dashboard/homes", { replace: true });


  //       } else if (data.user.userType === "admin") {
  //         // set the token
  //         setToken(data.jwt);

  //         // set the user
  //         setUser(data.user);

  //         // message.success(Welcome back ${data.user.username}!);

  //         navigate("/admindash/homepage", { replace: true });
  //       }
  //     }


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
