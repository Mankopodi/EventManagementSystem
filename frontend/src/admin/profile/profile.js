import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BiRename } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "./profile.css";
import { RiLockPasswordFill } from "react-icons/ri";
//import { useState, useEffect } from "react";

function Profile() {
  
   


  return (
    <div>
      <ToastContainer />
      <div className="hero min-h-screen flex justify-center align-middle">
        <div className="card w-96 card-compact  shadow-2xl">
        
        
          <div className="card-body">
            <h1 className="text-center text-5xl font-bold" style={{color:'black'}}>Profile</h1>
            <form>
              <div className="form-control">
                <label className="label" >
                  <span className="label-text" style={{color:'black'}}>Your Email</span>
                </label>
                <label className="input-group">
                  <span>
                    <MdEmail style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="email"
                    placeholder="info@site.com"
                    className="input input-bordered input-primary w-full"
                   
                   
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text" style={{color:'black'}}>Your username</span>
                </label>
                <label className="input-group">
                  <span>
                    <BiRename style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered input-primary w-full"
                    
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text" style={{color:'black'}}>Your firstname</span>
                </label>
                <label className="input-group">
                  <span>
                    <BiRename style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered input-primary w-full"
                
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text" style={{color:'black'}}>Your lastname</span>
                </label>
                <label className="input-group">
                  <span>
                    <BiRename style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered input-primary w-full"
                    
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text" style={{color:'black'}}>Your Cellphone</span>
                </label>
                <label className="input-group">
                  <span>
                    <IoCall style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="tel"
                    placeholder="e.g 0712345678"
                    className="input input-bordered input-primary w-full"
                   
                  />
                </label>
              </div>

              <div className="flex justify-end mt-9 space-x-2">
                <button className="btn btn-primary " >
                  Update
                </button>
                <label htmlFor="my-modal-3" className="btn btn-primary">
                  Change password
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal for change password */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
      
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Change your password</h3>

          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Current password</span>
              </label>
              <label className="input-group">
                <span>
                  <RiLockPasswordFill style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="password"
                  placeholder="*****************"
                  className="input input-bordered input-primary w-full"
                 
                 
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">New password</span>
              </label>
              <label className="input-group">
                <span>
                  <RiLockPasswordFill style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="password"
                  placeholder="*****************"
                  className="input input-bordered input-primary w-full"
                  
                
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <label className="input-group">
                <span>
                  <RiLockPasswordFill style={{ fontSize: "1.5rem" }} />
                </span>
                <input
                  type="password"
                  placeholder="*****************"
                  className="input input-bordered input-primary w-full"
                 
                 
                />
              </label>
            </div>

            <div className="flex justify-end mt-9 space-x-2">
              <button className="btn btn-primary" >
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;