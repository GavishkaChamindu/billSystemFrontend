import "./details.css";
import Navbar from "../../../components/navbar/Navbar";
import { NavLink } from "react-router-dom";

export default function Details() {
  return (
    <>
    <Navbar/>
    <div className="details">




        
        <div className="d-left">
            <div className="d-l-up">
                <h1 className="bill-details">BILL DETAILS</h1>
                <input type="text" placeholder="CEB Account Number" className="acc-no" />
               
               
               <div className="p-r">
               
                <div className="proceed">
                    <input type="submit" value="Proceed" className="proceed-btn" />
                </div>

                </div>
            </div>
            <div className="d-l-down">
                <h3 className="bill-details-show">BILL DETAILS</h3>


<div className="list-contains">
    <div className="show">
  <label htmlFor="" className="list-titles">Name</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
    <div className="show">
  <label htmlFor="" className="list-titles">Last Reading Date</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
    <div className="show">
  <label htmlFor="" className="list-titles">Last Reading Value</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
    <div className="show">
  <label htmlFor="" className="list-titles">Fixed Charge Amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
    <div className="show">
  <label htmlFor="" className="list-titles">First range billed amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
    <div className="show">
  <label htmlFor="" className="list-titles">Second range billed amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
    <div className="show">
  <label htmlFor="" className="list-titles">Third range billed amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
    <div className="show">
  <label htmlFor="" className="list-titles">Total billed amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>
</div>











                
            </div>
        </div>
        <div className="d-right"></div>
      
    </div>
    </>
  )
}
