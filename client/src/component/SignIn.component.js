import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://vijay-profile.herokuapp.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default class SignIn extends Component {

    constructor(props){
      super(props);
      this.state={
        email:'' ,
        password: '' ,
        message: ''
      }

      this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmail = e =>{
      this.setState({
          email:e.target.value
      });
  }

  onChangePassword = e =>{
      this.setState({
          password:e.target.value
      });
  }

  validate = () => {
    let isError = false;
    const errors ={
        emailError: '' ,
        passwordError:''
    };
    if (this.state.email.trim().length === 0) {
        isError = true;
        errors.emailError = "Email Is Required";
      }


    if(this.state.password.trim().length === 0){
        isError = true;
        errors.passwordError = "Password Is Required";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

    onSubmit = () =>{
      const isValid = this.validate();
      if(!isValid){
      return axios({
        method:"POST",
        url:'users/login' ,
        data:{
          email:this.state.email ,
          password: this.state.password
        }
      }).then(res =>{
        if (res.data.status === 404) {
          console.log(res.data.status);
          this.setState({
            message: res.data.error ,
            status: res.data.status
          })
        } else if(res.data.status === 400) {
          this.setState({
            message: res.data.error ,
            status: res.data.status
          })
        }
        else if(res.data.status === 200){
          localStorage.setItem('usertoken', res.data.token)
          window.location=`/DashBoard`;
        }
      }).catch(err =>{
        console.log(err);
      });
    }
    }

    render(){
      let { email, password} = this.state;
      let message = "";
      if (this.state.status === 404) {
          message = <Typography component="div">
          <Box textAlign="justify" style={{color:"white",backgroundColor:"red"}}>
            {this.state.message}
          </Box>
          </Typography>
      } else if(this.state.status === 400) {
          message = <Typography component="div">
          <Box textAlign="justify" style={{color:"white",backgroundColor:"red"}}>
          {this.state.message}
          </Box>
          </Typography>
      }
  return (
    <Container component="main" maxWidth="xs">
      {message}
      <CssBaseline />
        <Typography component="h1" variant="h5" style={{textAlign:"center"}}>
          Sign in
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={this.onChangeEmail}
            error={this.state.emailError?true:false}
            helperText={this.state.emailError}
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary" onClick={this.onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
}