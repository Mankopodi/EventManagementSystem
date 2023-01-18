import React from 'react'

function home() {
    return (
        <div className='flex justify-center mt-20'>
        <div className='card mr-8'>
            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">
               <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Bookings</h2>
                    <p>Make a booking for any time of your event.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='card mr-8'>
            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Event Packages</h2>
                    <p>Find out more about Event packages that you might prefer depending on your event in details</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Discover</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='card'>
            <div className="card card-compact w-72 h-72 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Rate & Reviews</h2>
                    <p>Checkout the Rate and Reviews for our event management system.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Reviews</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default home
