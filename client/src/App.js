import React from 'react';
import logo from './logo.svg';
import './App.css';
// components
import Signup from './Components/sign-up.js'
// import LoginForm from './Components/login-form'
import Navbar from './Components/navbar'
import Home from './Components/home'
import Search from './Components/searchPage'
import LoginForm from './Components/login-form'
import Recommendation from './Components/Recommendation-form'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"


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
          <Route component={Search} exact path="/searchPage"/>
          <Route component={Recommendation} exact path="/recommendation-form"/>
        </Switch>
      </div>
    </Router>
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>       */}
    </div>
  );
}

export default App;
