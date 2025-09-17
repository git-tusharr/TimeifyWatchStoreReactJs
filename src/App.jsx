import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashBoard from "./AdminDashBoard";
import AddProducts from "./AdminPages/AddProducts";
import MyCart from "./pages/MyCart";
import PaymentDone from "./pages/PaymentDone";
import CheckOut from "./pages/CheckOut";
import Customers from "./AdminPages/Customers";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
        <Route path="paydone" element={<PaymentDone/>}/>

        </Route>
      </Routes>

        <Routes>
             <Route path="/admin" element={<AdminDashBoard/>}>
             <Route path="addproducts" element={<AddProducts/>}></Route>
            <Route path="Customers" element={<Customers/>}/>

             </Route>

        </Routes>

        <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
    </>
  )
}
export default App;