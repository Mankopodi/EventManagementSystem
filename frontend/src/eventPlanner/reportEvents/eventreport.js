import React from 'react'


function eventreport() {
  return (
    <div className='min-h-screen'>
      <form>
            

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold" style={{color:'black'}}>Name of the Event:</span>
                </label>
                <label className="label">
                 
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered input-primary w-full"
                    
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold" style={{color:'black'}}>Date of the event:</span>
                </label>
                <label className="label">
                  
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered input-primary w-full"
                
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold" style={{color:'black'}}>Venue of the Event:</span>
                </label>
                <label className="label">
                  
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered input-primary w-full"
                    
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold" style={{color:'black'}}>Total number of Guests:</span>
                </label>
                <label className="label">
              
                  <input
                    type="tel"
                    placeholder=""
                    className="input input-bordered input-primary w-full"
                   
                  />
                </label>
              </div>
            </form>
    </div>
  )
}

export default eventreport
