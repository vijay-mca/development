import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signout: false
    };
    this.SignOut = this.SignOut.bind(this);
  }

  SignOut = e => {
    e.preventDefault();
    const token = localStorage.getItem("usertoken");
    if (token) {
      this.setState({
        signout: !this.state.signout
      });
      localStorage.removeItem("usertoken");
      window.location = "/";
    } else {
      this.setState({
        signout: this.state.signout
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: "20%",
            backgroundColor: "black",
            padding: "50px"
          }}
        >
          <div className="col-lg-12">
            <h1
              style={{ color: "white", fontSize: "3rem", textAlign: "center" }}
            >
              YOU WANT SIGNOUT PLEASE CLICK{" "}
              <b style={{ fontSize: "3.5rem", color: "green" }}>YES</b> OTHER
              WHYS <b style={{ fontSize: "3.5rem", color: "red" }}>NO</b>
            </h1>
          </div>
        </div>
        <div
          className="row"
          style={{ backgroundColor: "black", padding: "50px" }}
        >
          <div className="col-lg-6">
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
              onClick={this.SignOut}
              style={{ padding: "50px" }}
            >
              Yes
            </button>
          </div>
          <div className="col-lg-6">
            <Link
              to="/DashBoard"
              className="btn btn-outline-danger btn-lg btn-block"
              style={{ padding: "50px" }}
            >
              No
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
