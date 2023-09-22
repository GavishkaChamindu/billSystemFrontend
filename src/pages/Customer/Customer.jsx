import "./customer.css";
import { AiOutlineHome } from "react-icons/ai";

export default function Customer() {
  return (
    <div className="customer">
      <div className="contains">
        <div className="up">
            <div className="img">
                <img src="https://ebill.ceb.lk/img/cebcarelitelogo.png
" alt="" className="ceb-img" />
            </div>
            <div className="span">
                WELCOME TO
            </div>
            <div className="header">
                <h2 className="ceb">Ceylon Electricity Board</h2>
            </div>
            
        </div>


<hr />

        
        <div className="center">
            <div className="c-up">
                <h className="register">Registration for CEB e-Billing Service</h>
            </div>
            <div className="c-down">
                <div className="contains-center">
                  <div className="ac-no">
                    <div className="icon-border">
                    <span className="icon"><AiOutlineHome className="r-icon"/></span>
                    </div>
                    <input type="text" className="account" placeholder="Account No." />

               
                  </div>
                  <div className="date"></div>
                  <div className="value"></div>
                </div>
            </div>
        </div>






        <div className="bottom"></div>
      </div>
    </div>
  );
}
