import React from 'react'

function modal(props) {
  return (
    <>
        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn btn-accent">view Review</label>
  
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <p className="font-bold text-lg">{props.title}</p>
            {/* <p className="py-4">
                You've been selected for a chance to get one year
                of subscription to use Wikipedia for free!
             </p>
            <div className="modal-action">
            <label htmlFor="my-modal" className="btn">Yay!</label>
            </div> */}
        </div>
        </div>
    </>
  )
}

export default modal