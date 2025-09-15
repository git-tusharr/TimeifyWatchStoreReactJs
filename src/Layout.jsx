import { Outlet } from "react-router-dom";
import TopNavBar from "./component/TopNavBar";
import Footer from "./component/Footer";

const Layout = () => {
  return (
    <>
      <div id="top-nav-bar">
        <TopNavBar />
      </div>

      <Outlet />


      <Footer/>
    </>
  );
};

export default Layout;
