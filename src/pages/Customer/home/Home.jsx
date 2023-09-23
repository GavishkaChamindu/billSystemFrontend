import "./home.css";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function Home() {













    
  return (

<>

    
    <div className="home">
        
        <Navbar/>

<div className="head-text">
<h1 className="he">CEYLON ELECTRICITY BOARD</h1>
<h2 className="he-2">ILLUMINATING THE MOTHERLAND</h2>
    
</div>







        
        <div className="col">

          
            <div className="readers">
                <div className="r-left">
                <Link to="/reader" className="links">
                    <img src="https://thumb.ac-illust.com/80/80d8401d85ebb75fb1cb43162444d841_t.jpeg" alt="" className="reader-img" />
                    </Link>
               
                </div>
                <div className="r-right">
                <h3 className="customer-h">Reader</h3>
                </div>
            </div>
           



            
            <div className="customers">
                <div className="c-left">
                    <Link to="/customer">
                <img src="https://i.pinimg.com/474x/9a/6b/ff/9a6bff371db5aee057068e0adadfb1dc.jpg" alt="" className="reader-img" />
                </Link>
                </div>
                <div className="c-right">
                    <h3 className="customer-h">Customer</h3>
                </div>
            </div>
        </div>
      
    </div>

    </>
  )
}
