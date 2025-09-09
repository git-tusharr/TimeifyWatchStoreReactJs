import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";
const TopNavBar=()=>{
    return(
        <>

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
        <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: "black",
          marginRight: "8px"
        }}
      >
        T
      </div>
            <b>
                <span style={{ color: "yellow" }}>Timeify</span>
            </b>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#kids">Kids</Nav.Link>
            <Nav.Link href="#collection">Collection</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
        </>
    )
}
export default TopNavBar;