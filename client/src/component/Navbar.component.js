import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
export default class Navbar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/"><img srcSet={logo} /></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to='/Home' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/SignIn" className="nav-link">SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/SignUp" className="nav-link">SignUp</Link>
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