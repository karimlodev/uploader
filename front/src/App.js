import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productlist from "./components/Productlist";
import AddProduct from "./components/AddProduct";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Productlist/>}/>
      <Route path="/add" element={<AddProduct/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    
  

    </>

  );
}

export default App;
