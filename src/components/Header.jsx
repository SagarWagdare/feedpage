import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand>
            <i
              className="fa-brands fa-linkedin text-primary"
              style={{ filter: "drop-shadow(3 rem 0 0.5rem #e486da)" }}
            ></i>
            InsightFeed
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
