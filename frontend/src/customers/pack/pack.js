import React from "react";

function pack() {
  return (

   
    
    <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-2 ">
     
        <div className="card card-compact w-72 h-72 bg-base-300 shadow-xl ml-8 mt-8">
          <div className="card-body">
            <h2 className="card-title">PREMIUM</h2>
            <p>
              The event report can be thought of as the follow-up to an event
              proposal. It is a document that reviews the success and impact of
              your meeting or event and identifies growth highlights.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card card-compact w-72 h-72 bg-base-300 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title">DELUXE</h2>
            <p>
              Find out more about Event packages that you might prefer depending
              on your event in details
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card card-compact w-72 h-72 bg-base-300 shadow-xl mt-8 ">
          <div className="card-body">
            <h2 className="card-title">CLASSIC</h2>
            <p>
              The event report can be thought of as the follow-up to an event
              proposal. It is a document that reviews the success and impact of
              your meeting or event and identifies growth highlights.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      
  
  );
}

export default pack;
