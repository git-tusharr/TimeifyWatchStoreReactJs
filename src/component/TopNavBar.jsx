import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';


//For modal
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { RiShoppingCart2Line } from "react-icons/ri";





const TopNavBar=()=>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  let api = `http://localhost:3000/admin?adminid=${email}`;
  const response = await axios.get(api);

  console.log(response.data);

  if (response.data.length >= 1) {
    if (response.data[0].password === password) {
      navigate("/admin");
    } else {
      alert("Galat pass");
    }
  } else {
    alert("Invalid Email!");
  }
};




    return(
        <>

        <div id='top-nav-bar'>
       

      <div style={{marginBottom:"-30px"}}>
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
          <div id='admin-login-btn'>
            <Button variant="primary" onClick={handleShow}>
                   Admin Login
            </Button>
          </div>
                


                <div id='add-to-cart'>
                 <span style={{color:"white"}}>3</span>
                 < RiShoppingCart2Line color="white" size={24} />
                </div>


              
        </Container>
        
      </Navbar>
      </div>
      <br />
    </div>  





      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
    </Form>
    
    
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      
        </>
    )
}
export default TopNavBar;