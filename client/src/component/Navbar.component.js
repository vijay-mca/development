import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo192.png';

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            home:true,
            about:true,
            signin:true,
            signup:true
        }
        this.SignOut = this.SignOut.bind(this);
    }

    componentDidMount = () =>{
        const token = localStorage.getItem("usertoken");
        if(token){
            this.setState({
                home:false,
                about:false,
                signin:false,
                signup:false
            })
        }
    }

    SignOut = () =>{
        const token = localStorage.getItem("usertoken");
        if(token){
        localStorage.removeItem("usertoken");
        window.location='/SignIn';
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img src={logo} alt={logo} style={{width:"50px",height:"50px"}} /></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to={this.state.home?'/Home':'/MyProfile'} className="nav-link">{this.state.home?'Home':'MyProfile'}</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={this.state.about?'/About':'/Help'} className="nav-link">{this.state.home?'About':'Help'}</Link>
                        </li>
                        <li className="nav-item">
                        {this.state.signin?(
                             <Link to='/SignIn' className="nav-link">SignIn</Link>
                        ):(
                            <Link to='/SignIn' className="nav-link" onClick={this.SignOut}>SignOut</Link>
                        )}
                        </li>
                        <li className="nav-item">
                        <Link to={this.state.signup?'/SignUp':'/Feedback'} className="nav-link">{this.state.home?'SignUp':'Feedback'}</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}