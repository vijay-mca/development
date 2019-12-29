import React, { Component } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: 0,
      message: "",
      users: []
    };
    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    axios({
      method: "GET",
      url: "/users",
      headers: {
        token: localStorage.getItem("usertoken")
      }
    })
      .then(res => {
        this.setState({
          firstname: res.data.user.firstname,
          lastname: res.data.user.lastname,
          email: res.data.user.email,
          mobile: String(res.data.user.mobile)
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangefirstname = e => {
    this.setState({
      firstname: e.target.value
    });
  };

  onChangelastname = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangeMobile = e => {
    this.setState({
      mobile: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      firstnameError: "",
      emailError: "",
      mobileError: ""
    };

    if (this.state.firstname.trim() === 0) {
      isError = true;
      errors.firstnameError = "Username Is Required";
    } else if (this.state.firstname.length < 3) {
      isError = true;
      errors.firstnameError = "Username needs to be atleast 3 characters long";
    }

    if (this.state.email.trim().length === 0) {
      isError = true;
      errors.emailError = "Email Is Required";
    } else if (
      !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      isError = true;
      errors.emailError = "Requires Valid Mmail";
    }

    if (this.state.mobile.length === 0) {
      isError = true;
      errors.mobileError = "Mobile Number Is Required";
    } else if (!this.state.mobile.match(/^\d{10}$/)) {
      isError = true;
      errors.mobileError = "Mobile Number Must 10 Numbers";
    } else if (!this.state.mobile.match(/^[6-9]\d{9}$/)) {
      isError = true;
      errors.mobileError = "Requires Valid Mobile Number";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();

    const isValid = this.validate();
    if (!isValid) {
      axios({
        method: "POST",
        url: "/users/update",
        data: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          mobile: this.state.mobile,
          token: localStorage.getItem("usertoken")
        }
      })
        .then(res => {
          this.setState({
            message: res.data.message,
            status: res.data.status
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    let { firstname, lastname, email, mobile } = this.state;
    let message = "";
    if (this.state.status === 200) {
      message = (
        <Typography component="div">
          <Box
            textAlign="justify"
            style={{ color: "white", backgroundColor: "green" }}
          >
            Updated!
          </Box>
        </Typography>
      );
    }
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {message}
          <Typography
            component="h1"
            variant="h5"
            style={{ textAlign: "center" }}
          >
            Sign in
          </Typography>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              value={firstname}
              onChange={this.onChangefirstname}
              error={this.state.firstnameError ? true : false}
              helperText={this.state.firstnameError}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="mastName"
              label="Last Name"
              name="lastname"
              value={lastname}
              onChange={this.onChangelastname}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={this.onChangeEmail}
              error={this.state.emailError ? true : false}
              helperText={this.state.emailError}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="mobile"
              label="Mobile no"
              name="mobile"
              value={mobile}
              onChange={this.onChangeMobile}
              error={this.state.mobileError ? true : false}
              helperText={this.state.mobileError}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
            >
              Save
            </Button>
          </form>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}
