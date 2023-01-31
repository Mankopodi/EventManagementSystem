import React from 'react'
import { MdEmail } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import axios from "axios";
import "./adminProfile.css";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";

function profile() {

  const navigate = useNavigate(); 

  
  return (
    <div>
      <div className="hero min-h-screen flex justify-center align-middle">
        <div className="card w-96 card-compact bg-base-300 shadow-xl">
          {loading ? (
            <progress className="progress progress-primary w-96 loading"></progress>
          ) : (
            ""
          )}
          <div className="card-body">
            <h1 className="text-center text-5xl font-bold">Profile</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                  <span>
                    <MdEmail style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="email"
                    placeholder="info@site.com"
                    className="input input-bordered input-primary w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </label>
              </div>

             

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your firstname</span>
                </label>
                <label className="input-group">
                  <span>
                    <BiRename style={{ fontSize: "1.5rem" }} />
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="input input-bordered input-primary w-full"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                  />
                </label>
              </div>

           


              <div className="flex justify-end mt-9 space-x-2">
                <button className="btn btn-primary" onClick={update}>
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
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="flex justify-end mt-9 space-x-2">
              <button className="btn btn-primary" onClick={changePassword}>
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default profile
