import React, { Component } from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'' ,
            lastname:'' ,
            email:'' ,
            mobile:'',
            password:'' ,
            confirmpassword:'' ,
            users:[]
        }
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeFirstName = e =>{
        this.setState({
            firstname:e.target.value
        });
    }

    onChangeLastName = e =>{
        this.setState({
            lastname:e.target.value
        });
    }

    onChangeEmail = e =>{
        this.setState({
            email:e.target.value
        });
    }

    onChangeMobile = e =>{
        this.setState({
            mobile:Number(e.target.value)
        });
    }

    onChangePassword = e =>{
        this.setState({
            password:e.target.value
        });
    }

    onChangeConfirmPassword = e =>{
        this.setState({
            confirmpassword:e.target.value
        });
    }

    onSubmit = e =>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:5000/user/save',
            data: {
                firstname:this.state.firstname ,
                lastname:this.state.lastname ,
                email:this.state.email ,
                mobile:this.state.mobile ,
                password:this.state.password
            }
          });
    }

    render() {
        let {firstname, lastname, email, mobile, password, confirmpassword} = this.state;
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="FirstName">First Name</label>
                              <input type="text" className="form-control" value={firstname} onChange={this.onChangeFirstName} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="LastName">Last Name</label>
                              <input type="text" className="form-control" value={lastname} onChange={this.onChangeLastName} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="Email">Email</label>
                              <input type="text" className="form-control" value={email} onChange={this.onChangeEmail} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="Mobile">Mobile</label>
                              <input type="Number" className="form-control" value={mobile} onChange={this.onChangeMobile} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="Password">Password</label>
                              <input type="password" className="form-control" value={password} onChange={this.onChangePassword} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="ConfirmPassword">ConfirmPassword</label>
                              <input type="password" className="form-control" value={confirmpassword} onChange={this.onChangeConfirmPassword} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6 offset-xl-3 offset-sm-3 offset-md-3 offset-lg-3 text-center">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
