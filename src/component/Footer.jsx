import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="text-center">
          <Col md={4}>
           
      <h5>Timefy</h5>    
            <p>Serving for you.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <p>Home | About | Contact</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>Facebook | Twitter | LinkedIn</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <small>© {new Date().getFullYear()} Timefy. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
        
    </footer>
  );
};

export default Footer;
