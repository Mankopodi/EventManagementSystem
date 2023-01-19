import React from 'react'

function pack() {
    return (
        

        <div className='grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-2 first-letter:justify-center mt-20 justify-items-center'>
            
            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">Reports for Events</h2>
                    <p>The event report can be thought of as the follow-up to an event proposal. It is a document that reviews the success and impact of your meeting or event and identifies growth highlights.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">Event Packages</h2>
                    <p>Find out more about Event packages that you might prefer depending on your event in details</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Discover</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">Reports for Event Halls</h2>
                    <p>The event report can be thought of as the follow-up to an event proposal. It is a document that reviews the success and impact of your meeting or event and identifies growth highlights.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View</button>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">Rate & Reviews</h2>
                    <p>Checkout the Rate and Reviews for our event management system.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Reviews</button>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default pack
