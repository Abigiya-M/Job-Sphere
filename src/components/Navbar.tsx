import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggle,
  Button,
  NavbarCollapse,
} from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Add the logo */}
        <NavbarBrand href="#">
          <img
            src="/images/logo.svg" // Adjust the path based on your file location
            alt="JobSphere Logo"
            width="100" // Adjust size as needed
            height="40"
            className="d-inline-block align-top"
          />
        </NavbarBrand>
        <NavbarToggle aria-controls="navbar-nav" />

        <NavbarCollapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Job Search</Nav.Link>
            <Nav.Link href="#">Application</Nav.Link>
            <Nav.Link href="#">Companies</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button variant="primary">Login</Button>
            <Button variant="outline-primary" className="ms-2">
              Signin
            </Button>
          </div>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
