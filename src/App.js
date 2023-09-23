import Customer from "./pages/Customer/Customer";
import Details from "./pages/Customer/details/Details";
import Home from "./pages/Customer/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
  
  




   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
<Route path="/customer" element={<Details/>}/>

<Route path="/reader" element={<Customer/>}/>
    
   </Routes>
   
   
   </BrowserRouter>
  

    </div>
  );
}

export default App;
