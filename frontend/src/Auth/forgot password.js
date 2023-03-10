import { useEffect } from "react";
import { React, useRef } from "react";
import axios from "axios";
import land from "../assets/images/land.jpeg";

const ForgotPasswordPage = () => {
  const forms = useRef();
  const emailInputRefs = useRef();

  async function forgot_Password(e) {
    e.preventDefault();

    const enteredEmail = emailInputRefs.current.value;
    let data = {
      email: enteredEmail,
    };

    console.log(data);

    axios
      .post("http://localhost:1337/api/auth/forgot-password", data, {
        headers: {
          Authorization:
            "Bearer 250eef87747aa5f9d15eff17f0e6d5eec29926f34d62331cbd401176efd8cba59ca8daa9552f2fecb67ed29c77294c74c6cdb7176d7247dcf28c6955d45c90b01b589087f914f1ca23f1562dbfef6d19db5ebe4e6eb0319d17acdcd829a33223a82a3eb2c414c563fe66a8915b6ece267c63b31930e1f5731007f72900d763a5",
        },
      })
      .then((response) => {
        // Handle success.
        console.log(response);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });

    e.target.reset();
  }

  return (
    <div
      className="bg_image"
      style={{
        backgroundImage: "url(" + land + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div className="w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="hero min-h-screen w-screen">
            <div className=" shadow-3xl   w-96 card-compact lg:w-6/12 mt-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-black flex justify-center mt-2">
                  Forgot password
                </h1>
              </div>
              <div className="card-body">
              <form
                ref={forms}
                onSubmit={forgot_Password}
                className="max-w-md w-full mx-auto overflow-hidden shadow-2xl rounded-2xl p-8 space-y-5"
              >
                <label className="label">
                  <span className="label-text font-bold text-black">Enter your Email:</span>
                </label>
                <input type="text" className="input input-bordered input-accent" />
                <button className="btn btn-accent text-black">Send Reset Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
