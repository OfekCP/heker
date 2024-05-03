import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './navBar.css'; // Import custom CSS for additional styling
import hamburgerIcon from './hamburger.svg'; // Import the custom hamburger SVG icon
import Logo from './HEKER WHITE TRANSPARENT.png'
const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="/" className="logo">
        <img
          src={Logo}
          width="170"
          height="60"
          className="d-inline-block align-top p-0 ml-3"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
        <img src={hamburgerIcon} alt="Hamburger Icon" className="hamburger-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="/">בית</Nav.Link>
          <Nav.Link href="/works">עבודות</Nav.Link>
          <Nav.Link href="/contact">יצירת קשר</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
