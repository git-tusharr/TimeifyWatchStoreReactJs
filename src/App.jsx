import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashBoard from "./AdminDashBoard";


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        </Route>
      </Routes>

       <Routes>
             <Route path="/admin" element={<AdminDashBoard/>}>
             </Route>

          </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;