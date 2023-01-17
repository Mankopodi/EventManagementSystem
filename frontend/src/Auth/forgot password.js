
import { useEffect } from "react";
import { React, useRef } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
    const forms = useRef();
    const emailInputRefs = useRef();





    async function forgot_Password  (e){
        e.preventDefault();
    
      
        const enteredEmail = emailInputRefs.current.value;
        let data = {
          email: enteredEmail,
        };
    
        console.log(data);
     
    
    
        axios
          .post(
            "http://localhost:1337/api/auth/forgot-password",
            data,
            {
              headers: {
                Authorization:
                  "Bearer 250eef87747aa5f9d15eff17f0e6d5eec29926f34d62331cbd401176efd8cba59ca8daa9552f2fecb67ed29c77294c74c6cdb7176d7247dcf28c6955d45c90b01b589087f914f1ca23f1562dbfef6d19db5ebe4e6eb0319d17acdcd829a33223a82a3eb2c414c563fe66a8915b6ece267c63b31930e1f5731007f72900d763a5",
              },
            }
          )
          .then((response) => {
            // Handle success.
            console.log(response);
          })
          .catch((error) => {
            // Handle error.
            console.log("An error occurred:", error.response);
          });
        
    
        e.target.reset();
      };
    
  return (
    <section className="bg-ct-blue-600 min-h-screen grid place-items-center">
      <div className="w-full">
        <h1 className="text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 mb-7">
          Forgot Password
        </h1>
       
          <form
            ref={forms}
            onSubmit={forgot_Password}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
          >
            <input
            ref={emailInputRefs}
            label="Email Address" name="email" type="email" />
            <button
              
            >
              Send Reset Code
            </button>
          </form>
       
      </div>
    </section>
  );
};

export default ForgotPasswordPage;


