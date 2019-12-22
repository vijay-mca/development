import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="head">
                    My Technology
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="cards">
                            <h1>HTML</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="cards">
                             <h1>CSS</h1>
                        </div>
                    </div>
                </div>
                <div className="row br">
                    <div className="col-xl-6">
                        <div className="cards">
                            <h1>Bootstrap</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="cards">
                             <h1>Java</h1>
                        </div>
                    </div>
                </div>
                <div className="row br">
                    <div className="col-xl-6">
                        <div className="cards">
                            <h1>Php</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="cards">
                             <h1>Asp.Net</h1>
                        </div>
                    </div>
                </div>
                <div className="row br">
                    <div className="col-xl-6">
                        <div className="cards">
                            <h1>Node Js</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="cards">
                             <h1>XML</h1>
                        </div>
                    </div>
                </div>
                <div className="row br">
                    <div className="col-xl-12">
                        <div className="cards">
                            <h1>React Js</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}