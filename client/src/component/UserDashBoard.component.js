import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class UserDashBoard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            firstName:'' ,
            lastName:'' ,
            email:'' ,
            mobile:'',
          }
    }

    componentDidMount = () =>{
        const token = localStorage.getItem("usertoken");
        if (token) {
            axios({
                method:"GET",
                url:"/users",
                headers: {
                    token: token}
            })
            .then(res => {
                this.setState({
                    firstName: res.data.user.firstname ,
            lastName:res.data.user.lastname ,
            email:res.data.user.email ,
            mobile:res.data.user.mobile ,
                })
            })
            .catch(err => {
                console.log(err);
            });
        } else {
           window.location='/SignIn';
        }        
    }



    render() {
const {firstName, lastName, email, mobile}=this.state;
        return (
<div class="row">
    <div className="col-lg-6 offset-lg-3">
    <table className="table table-stripedtable-responsive">
        <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Mobile</td>
                    <td>{mobile}</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block">Update</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
);
}
}
export default UserDashBoard

