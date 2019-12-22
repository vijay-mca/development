import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component/Navbar.component';
import Home from './component/Home.component';
import About from './component/About.component';
import SignIn from './component/SignIn.component';
import SignUp from './component/SignUp.component';
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/SignIn" component={SignIn}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
    </Router>
  );
}

export default App;
