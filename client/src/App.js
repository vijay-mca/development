import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component/Navbar.component';
import Home from './component/Home.component';
import About from './component/About.component';
import SignIn from './component/SignIn.component';
import SignUp from './component/SignUp.component';
import DashBoard from './component/UserDashBoard.component';
function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Route path="/" exact component={Home}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/SignIn" component={SignIn}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
      <Route path="/DashBoard" component={DashBoard}></Route>
    </Router>
    </div>
  );
}

export default App;
