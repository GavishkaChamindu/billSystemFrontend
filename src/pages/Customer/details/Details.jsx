import React from "react";

export default function Details() {
  return (
    <div className="details">
        <div className="d-left">
            <div className="d-l-up">
                <h1 className="bill-details">BILL DETAILS</h1>
                <input type="text" placeholder="CEB Account Number" className="ac-no" />
                <div className="proceed">
                    <input type="submit" value="Proceed" className="proceed-btn" />
                </div>
            </div>
            <div className="d-l-down"></div>
        </div>
        <div className="d-right"></div>
      
    </div>
  )
}
