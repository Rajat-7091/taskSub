import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#e3f2fd"}} variant="dark">
      <Container >
        <Navbar.Brand href="/" style={{color:"#000"}}>Riders.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/login" style={{color:"#000"}}>Login</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="/Login" style={{color:"#000"}}>Login</Nav.Link>
            <Nav.Link href="/contact" style={{color:"#000"}}>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars