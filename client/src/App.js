import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./component/Navbar.component";
import Home from "./component/Home.component";
import About from "./component/About.component";
import SignIn from "./component/SignIn.component";
import SignUp from "./component/SignUp.component";
import DashBoard from "./component/UserDashBoard.component";
import Edit from "./component/Edit.component";
import SignOut from "./component/SignOut.component";

const AuthenticationRoute = ({ component: Component, ...reset }) => (
  <Route
    {...reset}
    render={props =>
      localStorage.getItem("usertoken") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/SignIn" />
      )
    }
  />
);

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
        <AuthenticationRoute
          path="/DashBoard"
          component={DashBoard}
        ></AuthenticationRoute>
        <AuthenticationRoute
          path="/Edit"
          component={Edit}
        ></AuthenticationRoute>
        <AuthenticationRoute
          path="/SignOut"
          component={SignOut}
        ></AuthenticationRoute>        
      </Router>
    </div>
  );
}

export default App;
