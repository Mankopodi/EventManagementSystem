import React from "react";

function pack() {
  return (
    <div className="min-h-screen">
      <h1 className="text-center font-bold text-4xl" style={{ color: "white" }}>
        Wedding Packages
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-2 ">
        <div className="card card-compact w-72 bg-base-100 shadow-xl ml-8 mt-8">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">PREMIUM</h2>
            <p>Food </p>
            <p>Photography</p>
            <p>Decor</p>
          </div>
        </div>

        <div className="card card-compact w-72 bg-base-100 shadow-xl ml-8 mt-8">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">DELUXE</h2>
            <p>Photography </p>
            <p>Food</p>
          </div>
        </div>

        <div className="card card-compact w-72 bg-base-100 shadow-xl ml-8 mt-8 ">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">CLASSIC</h2>
            <p>Food</p>
          </div>
        </div>
      </div>

      <h1 className="text-center font-bold text-4xl" style={{ color: "white" }}>
        Parties Packages
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-2 ">
        <div className="card card-compact w-72  bg-base-100 shadow-xl ml-8 mt-8">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">FOR KIDS</h2>
            <p> Jumping Castle.</p>
            <p> Bubble Machine.</p>
            <p> Party Boxes: Snacks,Sweets and More.</p>
          </div>
        </div>

        <div className="card card-compact w-72  bg-base-100 shadow-xl ml-8 mt-8">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">FOR ADULTS</h2>
            <p>Decor : Color of your choice. </p>
            <p>Alcohol: Your choice.</p>
          </div>
        </div>

        <div className="card card-compact w-72  bg-base-100 shadow-xl ml-8 mt-8 ">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">BABY/BRIDAL SHOWER</h2>
            <p> Ballons.</p>
            <p>Attire.</p>
            <p>Food.</p>
          </div>
        </div>
      </div>

      <h1
        className="text-center font-bold text-4xl mt-8"
        style={{ color: "white" }}
      >
        Conference Packages
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-2 ">
        <div className="card card-compact w-72 bg-base-100 shadow-xl ml-8 mt-8">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">STANDARD</h2>
            <p>On Arrival: Hot and Cold Buffet Breakfast (7:00am-9:30am)</p>
            <p>Morning Break: Coffee, Tea, Juice and Bottled Water.</p>
            <p>Lunch: Three Course Buffet.</p>
            <p>Afternoon Break: Tea, Coffee and Tea Time Treats.</p>
            <p> Venue: Flipchart with Markers, Notepads and Pens Free Wi-Fi</p>
          </div>
        </div>

        <div className="card card-compact w-72 bg-base-100 shadow-xl ml-8 mt-8 mb-8">
          <div className="card-body font-bold" style={{ color: "white" }}>
            <h2 className="card-title underline">STAY-OVER</h2>
            <p>Dinner.</p>
            <p>Single Accommodation.</p>
            <p>Sharing Accommodation.</p>
            <p>Breakfast the next Morning.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-8 ">
        <button
          className="btn btn-active btn-accent mb-8"
          style={{ color: "white" }}
        >
          Customize your event package
        </button>
      </div>
    </div>
  );
}

export default pack;
