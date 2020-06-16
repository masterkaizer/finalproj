import React from 'react';
import logo from './logo.svg';
import './App.css';
// components
import Signup from './Components/sign-up.js'
// import LoginForm from './Components/login-form'
import Navbar from './Components/navbar'
import Home from './Components/home'
import LoginForm from './Components/login-form'
import Recommendation from './Components/Recommendation-form'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"
import Recommendations from './pages/Recommendations';
import Meetup from './Components/meetups';
import Profile from './Components/Profile';



function App() {
  return (
    <div className="App">
      <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. (can add nav bar above)*/}
        <Switch>
          <Route component={Signup} exact path="/signup"/>
          <Route component={Home} exact path="/"/>
          <Route component={LoginForm} exact path="/login"/>
          <Route component={Meetup} exact path="/meetups"/>
          <Route component={Recommendation} exact path="/recommendation-form"/>
          <Route component={Recommendations} exact path="/recommendations"/>
          <Route component={Profile} exact path="/Profile"/>
        </Switch>
      </div>
      {/* <Recommendations/> */}
    </Router>
    <div>
    </div>
    </div>
  );
}

export default App;
