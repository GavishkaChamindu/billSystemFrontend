import "./details.css";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function Details() {
const [Account_number, setAccount_number] = useState('');
const [customerData,setCustomerData] = useState(null);
const [error,setError] = useState("");
const [billData,setBillData] = useState("");


const handleSubmit = async (e)=>{
    e.preventDefault();
    alert(Account_number);


try{
    const response = await axios.get('http://localhost:8000/api/show',{
        params:{
            Account_number:Account_number,
        },
    });
    setCustomerData(response.data.latest_customer);
    setBillData(response.data);
    console.log('customerData:', customerData);
    setError('');
}catch{
    setCustomerData(null);
    setError('Customer not found');
}

    
}





async function show (e){
    e.preventDefault();
    handleSubmit(e);
  alert (Account_number);
    
}







    
  return (
    <>
    <Navbar/>
    <div className="details">



    {error && <p>{error}</p>}
      {customerData && (
        <div>



          
        </div>
      )}
















        
        <div className="d-left">
            <div className="d-l-up">
                <h1 className="bill-details">BILL DETAILS</h1>
                <input type="text" placeholder="CEB Account Number" className="acc-no"  onChange={(e)=>setAccount_number(e.target.value)} value={Account_number}/>
               
               
               <div className="p-r">
               
                <div className="proceed">
                    <button className="proceed-btn" onClick={show} >Proceed</button>
                </div>

                </div>
            </div>
            <div className="d-l-down">
                <h3 className="bill-details-show">BILL DETAILS</h3>















<div className="list-contains">


{customerData ? (

<div className="show">
<label htmlFor="" className="list-titles">Name</label>
<br />
<label htmlFor="" className="na">{customerData.name}</label>
</div>


    
):(



    <div className="show">
    <label htmlFor="" className="list-titles">Name</label>
    <br />
    <label htmlFor="" className="na">N/A</label>
    </div>

   

 
)}





{customerData ? (
    
<div className="show">
  <label htmlFor="" className="list-titles">Last Reading Value</label>
  <br />
  <label htmlFor="" className="na">{customerData.value}</label>
  </div>
    
):(

<div className="show">
  <label htmlFor="" className="list-titles">Last Reading Value</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>



    
)}



{customerData ? (


<div className="show">
  <label htmlFor="" className="list-titles">Last Reading Date</label>
  <br />
  <label htmlFor="" className="na">{customerData.date}</label>
  </div>
    
):(

<div className="show">
  <label htmlFor="" className="list-titles">Last Reading Date</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>



    
)}







{customerData ? (

<div className="show">
<label htmlFor="" className="list-titles">Fixed Charge Amount</label>
<br />
<label htmlFor="" className="na">{billData.fixed_charge_amount}</label>
</div>  
    
):(

<div className="show">
  <label htmlFor="" className="list-titles">Fixed Charge Amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>


    
)}



{billData ? (
    
<div className="show">
  <label htmlFor="" className="list-titles">First range billed amount</label>
  <br />
  <label htmlFor="" className="na">{billData.first}</label>
  </div>

    
):(

<div className="show">
  <label htmlFor="" className="list-titles">First range billed amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>

    
)}


{billData ?(

<div className="show">
<label htmlFor="" className="list-titles">Second range billed amount</label>
<br />
<label htmlFor="" className="na">{billData.second}</label>
</div> 
    
):(

<div className="show">
  <label htmlFor="" className="list-titles">Second range billed amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>

    
)}
    
   
    {billData ?(
        
<div className="show">
  <label htmlFor="" className="list-titles">Third range billed amount</label>
  <br />
  <label htmlFor="" className="na">{billData.third}</label>
  </div>
        
    ):(

<div className="show">
  <label htmlFor="" className="list-titles">Third range billed amount</label>
  <br />
  <label htmlFor="" className="na">N/A</label>
  </div>

        
    )}




    {billData ? (

<div className="show">
<label htmlFor="" className="list-titles">Total billed amount</label>
<br />
<label htmlFor="" className="na">{billData.total}</label>
</div>

    ):(

        <div className="show">
        <label htmlFor="" className="list-titles">Total billed amount</label>
        <br />
        <label htmlFor="" className="na">N/A</label>
        </div>

        
    )}
    
    
    
    
   
</div>











                
            </div>
        </div>
        <div className="d-right"></div>
      
    </div>
    </>
  )
}
