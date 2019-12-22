import React, { Component } from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'' ,
            lastname:'' ,
            email:'' ,
            password:'' ,
            confirmpassword:'' ,
            users:[]
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
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


    onSubmit = e =>{
        e.preventDefault();
        const credentials={
            email:this.state.email ,
            password:this.state.password
        };
    }

    render() {
        let {firstname, lastname, email, password, confirmpassword} = this.state;
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6 offset-xl-3 offset-sm-3 offset-md-3 offset-lg-3 text-center">
                            <div className="form-group">
                              <label htmlFor="Email">Email</label>
                              <input type="text" className="form-control" value={email} onChange={this.onChangeEmail} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-6 col-md-6 col-lg-6 offset-xl-3 offset-sm-3 offset-md-3 offset-lg-3 text-center">
                            <div className="form-group">
                              <label htmlFor="Password">Password</label>
                              <input type="password" className="form-control" value={password} onChange={this.onChangePassword} />
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
