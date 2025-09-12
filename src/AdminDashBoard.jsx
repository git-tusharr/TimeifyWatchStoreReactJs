import { Link, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
  return (
    <>
      <div
        id="adminheader"
       
      >
        <h1>Welcome To Admin DashBoard 3</h1>
      </div>

      <div
        id="admindisplay"
        style={{
          display: "flex",
          height: "calc(100vh - 70px)", // full height minus header
        }}
      >
        {/* Left Menu */}
        <div
          id="adminleftmenu"
          
        >
          <Link
            to="addproducts"
            className="adminmenu"
            style={{
              color: "white",
              textDecoration: "none",
              backgroundColor: "#444",
              padding: "10px 20px",
              borderRadius: "5px",
              marginBottom: "10px",
              width: "80%",
              textAlign: "center",
            }}
          >
            Upload Product
          </Link>
        </div>

        {/* Right Content Area */}
        <div
          id="admindata"
          style={{
            width: "80%",
            padding: "30px",
            backgroundColor: "#f9f9f9", // Light background for contrast
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
