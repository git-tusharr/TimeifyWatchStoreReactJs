import TopNavBar from "./component/TopNavBar";
import Home from "./pages/Home";

const Layout=()=>{
    return(
        <>
       <div id="top-nav-bar">
            <TopNavBar />
        </div>

        
        <Home></Home>
        
        </>
    )
}
export default Layout;