import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

export default class UserDashBoard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user:[],
             email:''
        }
    }

    componentDidMount = () =>{
        axios({
            method:"GET",
            url:"/users",
        }).then(res => {
            if (res.data.status === 401) {
                window.location = "/SignIn"
            } else {
                
            }
        }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
