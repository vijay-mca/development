import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo192.png";
import  "@material-ui/core";
export default class Navbar extends Component {
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
        <li key={6} className="nav-item active">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>,
        <li key={7} className="nav-item active">
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>,
        <li key={8} className="nav-item active">
          <Link to="/SignIn" className="nav-link">
            SignIn
          </Link>
        </li>,
        <li key={9} className="nav-item active">
          <Link to="/SignUp" className="nav-link">
            SignUp
          </Link>
        </li>,
        <li key={10} className="nav-item active">
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </li>,
        <li key={11} className="nav-item active">
          <Link to="/Help" className="nav-link">
            Help
          </Link>
        </li>
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
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this.NavigationBar()}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
