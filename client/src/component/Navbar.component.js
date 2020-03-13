import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo192.png";
import { Navbar,Nav, Form,FormControl, Button } from 'reactstrap'

export default class Navbars extends Component {
  constructor(props) {
    super(props);
  }

  NavigationBar = () => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      return [
        <li key={1} className="nav-item active">
          <Link to="/DashBoard" className="nav-link">
            MyProfile
          </Link>
        </li>,
        <li key={2} className="nav-item active">
          <Link to="/Resume" className="nav-link">
            Resume
          </Link>
        </li>,
        <li key={3} className="nav-item active">
          <Link to="/Help" className="nav-link">
            Help
          </Link>
        </li>,
        <li key={4} className="nav-item active">
          <Link to="/Feedback" className="nav-link">
            Feedback
          </Link>
        </li>,
        <li key={5} className="nav-item active">
          <Link to="/SignOut" className="nav-link">
            SignOut
          </Link>
        </li>
      ];
    } else {
      return [
        <Nav.Link href="/">Home</Nav.Link>,
        <Nav.Link href="/About">About</Nav.Link>,
        <Nav.Link href="/SignIn">SignIn</Nav.Link>,
        <Nav.Link href="/SignUp">SignUp</Nav.Link>
          
      ];
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt={logo}
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
{this.NavigationBar}
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </nav>
    );
  }
}
