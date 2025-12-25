import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

import { RiShoppingCart2Line } from "react-icons/ri";
import "../css/TopNavBar.css";

const TopNavBar = () => {
  const CartData = useSelector((state) => state.mycart.cart);
  const CartLength = CartData.length;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let api = `http://localhost:3000/admin?adminid=${email}`;
    const response = await axios.get(api);

    if (response.data.length >= 1) {
      if (response.data[0].password === password) {
        navigate("/admin");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Invalid Email");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="dark" expand="lg" variant="dark" className="top-navbar">
        <Container>
          {/* LOGO */}
          <Navbar.Brand className="brand" onClick={() => navigate("/")}>
            <div className="logo-circle">T</div>
            <span className="brand-name">Timeify</span>
          </Navbar.Brand>

          {/* HAMBURGER */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* COLLAPSIBLE MENU */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#kids">Kids</Nav.Link>
              <Nav.Link href="#collection">Collection</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>

            {/* RIGHT SIDE */}
            <div className="nav-actions">
              <Button variant="primary" onClick={handleShow}>
                Admin Login
              </Button>

              <div
                className="cart-icon"
                onClick={() => navigate("/mycart")}
              >
                <span className="cart-count">{CartLength}</span>
                <RiShoppingCart2Line size={26} />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* LOGIN MODAL */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TopNavBar;
