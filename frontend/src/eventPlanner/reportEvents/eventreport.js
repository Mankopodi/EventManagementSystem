import React from 'react'
import 

function eventreport() {
  return (
    <div className='min-h-screen'>
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
  )
}

export default eventreport
