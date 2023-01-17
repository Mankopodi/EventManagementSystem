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
const config = require('./config.json')

  export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const data = {
      identifier: email,
      password: password,
    };
    console.log(data);

    await axios
      .post(`${config.dev_url}/api/auth/local`, {
        identifier: email,
        password: password,
      })
      .then((response) => {
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={login}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link  to={'/forgot-password'} className="text-xs text-black-900 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform btn-primary rounded-md hover:btn-primary focus:outline-none focus:btn-primary">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link to={"/register"} className="font-medium text-black-900 hover:underline">
            
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
