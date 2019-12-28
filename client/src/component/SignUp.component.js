import React, { Component } from 'react'
import {Button,CssBaseline,TextField,FormControlLabel,Checkbox,Grid,Box,Typography,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link to="/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default class t extends Component {


    constructor(props){
        super(props);
        this.state={
            firstName:'' ,
            lastName:'' ,
            email:'' ,
            mobile:'',
            password:'' ,
            passwordError:'',
            confirmPassword:'' ,
            hiddenP:true ,
            hiddenCP:true ,
            message:'' ,
            users:[]
        }
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeconfirmPassword = this.onChangeconfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleShowP = this.toggleShowP.bind(this);
        this.toggleShowCP = this.toggleShowCP.bind(this);
    }
    
    onChangefirstName = e =>{
        this.setState({
            firstName:e.target.value
        });
    }

    onChangelastName = e =>{
        this.setState({
            lastName:e.target.value
        });
    }

    onChangeEmail = e =>{
        this.setState({
            email:e.target.value
        });
    }

    onChangeMobile = e =>{
        this.setState({
            mobile:e.target.value
        });
    }

    onChangePassword = e =>{
        this.setState({
            password:e.target.value
        });
    }

    onChangeconfirmPassword = e =>{
        this.setState({
            confirmPassword:e.target.value
        });
    }
  validate = () => {
    let isError = false;
    const errors ={
        firstNameError:'',
        emailError:'',
        mobileError:'',
        passwordError:'',
        confirmError:'',
    };

    if(this.state.firstName.trim()=== 0){
        isError = true;
        errors.firstNameError = "Username Is Required";
    }
    else if (this.state.firstName.length < 3) {
      isError = true;
      errors.firstNameError = "Username needs to be atleast 3 characters long";
    }

    if (this.state.email.trim().length === 0) {
        isError = true;
        errors.emailError = "Email Is Required";
      }
    else if (!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      isError = true;
      errors.emailError = "Requires Valid Mmail";
    }

    if (this.state.mobile.length === 0) {
        isError = true;
        errors.mobileError = "Mobile Number Is Required";
    } 
    else if (!this.state.mobile.match(/^\d{10}$/)) {
        isError = true;
        errors.mobileError = "Mobile Number Must 10 Numbers";
    }
    else if(!this.state.mobile.match(/^[6-9]\d{9}$/)){
        isError = true;
        errors.mobileError = "Requires Valid Mobile Number"
    }

    if(this.state.password.trim().length === 0){
        isError = true;
        errors.passwordError = "Password Is Required";
    }
    else if(!this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/)){
        isError = true;
        errors.passwordError = "8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
    }

    if(this.state.confirmPassword.trim().length === 0){
        isError = true;
        errors.confirmError = "ConfirmPassword Is Required";
    }
    else if(this.state.password !== this.state.confirmPassword){
        isError = true;
        errors.confirmError = "Password Doesn't Match ";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  toggleShowP = (e) =>{
    e.preventDefault();
    this.setState({ hiddenP: !this.state.hiddenP });
  }
  toggleShowCP = (e) =>{
    e.preventDefault();
    this.setState({ hiddenCP: !this.state.hiddenCP });
  }

    onSubmit = e =>{
        e.preventDefault();

        const isValid = this.validate();
        if(!isValid){
        axios({
            method: 'POST',
            url: '/users/save',
            data: {
                firstName:this.state.firstName ,
                lastName:this.state.lastName ,
                email:this.state.email ,
                mobile:this.state.mobile ,
                password:this.state.password
            }
          })
            .then(res =>{ 
                    this.setState({
                        message: res.data
                    });
            })
            .catch(err =>{
                console.log(err);
            });
        }
    }

    render() {
        let {firstName, lastName, email, mobile, password, confirmPassword} = this.state;
        let message = "";
        if (this.state.message === "false") {
            message = <Typography component="div">
            <Box textAlign="justify" style={{color:"white",backgroundColor:"red"}}>
              Email Id Already Exist!
            </Box>
            </Typography>
        } else if(this.state.message === "true") {
            message = <Typography component="div">
            <Box textAlign="justify" style={{color:"white",backgroundColor:"green"}}>
              Account Created
            </Box>
            </Typography>
        }
        return (
            <div>
                 <Container component="main" maxWidth="xs">
      <CssBaseline />
      {message}
        <Typography component="h1" variant="h5" style={{textAlign:"center"}}>
          Sign in
        </Typography>
        <form>
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={this.onChangefirstName}
            error={this.state.firstNameError?true:false}
            helperText={this.state.firstNameError}
          />
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="mastName"
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={this.onChangelastName}
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
            error={this.state.emailError?true:false}
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
            error={this.state.mobileError?true:false}
            helperText={this.state.mobileError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={this.onChangePassword}
            error={this.state.passwordError?true:false}
            helperText={this.state.passwordError}
          />
            <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={this.onChangeconfirmPassword}
            error={this.state.confirmError?true:false}
            helperText={this.state.confirmError}
          />
          <FormControlLabel
            control={<Checkbox value="Terms" color="primary" />}
            label="Accept The Terms And Conditions"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
                <Link to="/SignIn">
                I have an account? Sign In
                </Link>
            </Grid>
          </Grid>
        </form>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
            </div>
        )
    }
}
