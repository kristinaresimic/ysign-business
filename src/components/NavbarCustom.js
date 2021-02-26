import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from '../img/Logo.png';

export const NavbarCustom = () => {
  return (
    <Navbar className="navbar col-11 col-lg-10 mx-auto pt-3" expand="lg">
      <Navbar.Brand className="navbar-brand" href=""><img className="navbar-logo" src={Logo} alt="ySign BIZ logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <NavDropdown
            className="navbar-dropdown mx-3 my-2 my-lg-0 p4"
            title="SOLUTIONS"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className="navbar-dropdown-item p4" href="">Action</NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-item p4" href="">Another action</NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-item p4" href="">Something</NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-item p4" href="">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="navbar-item mx-3 my-2 my-lg-0 p4" href="">PLANS AND PRICING</Nav.Link>
          <Nav.Link className="navbar-item mx-3 my-2 my-lg-0 p4" href="">CONTACT US</Nav.Link>

        </Nav>
        <div className="">
          <button className="bg-transparent border-0 p4 mx-0 mx-lg-3p px-0 px-lg-2  c-black">
            <Nav.Link className="navbar-item  my-lg-0 p4" href="">SIGN IN</Nav.Link>
          </button>
          <button className="navbar-btn c-white border-0 p3 mx-3 px-0 px-lg-2">
           SIGN UP FOR FREE
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarCustom

