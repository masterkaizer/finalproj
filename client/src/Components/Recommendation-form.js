import React, {Component} from 'react'
import axios from 'axios'
import css from'../search.css';
import { Link } from 'react-router-dom'

// import LoginForm from 'Components/login-form.js'

class Recommendation extends Component {
    constructor() {
        super()
    }

    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <img  src="\images\logo.png"/>
                <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button"><Link to="/">Home</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/login">Login</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/signup">Sign up</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/recommendations">Recommendations</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/searchPage">Search Page</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/recommendation-form">Recommendation</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/Profile">Profile</Link></button>
 </form>
</nav>
                
            <div>
                <h1>What's happening!</h1>
                <p>Find the lastest new on what's going on for the pups here!</p>
                {/* <button>Signup</button>
                <button>Login</button>
                <button><Link to="/login">Login</Link></button> */}
                {/* <button variant="btn btn-success" onClick={() => LoginForm.push('/Products')}>Click button to view products</button> */}
                <img style={imageStyle} src="https://www.silvernickelpuppies.com/wp-content/uploads/2020/01/DOGS-IN-NY.png" />
            </div>
<div>

<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </input>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Grooming</option>
      <option>Parks</option>
      <option>Restaurant</option>
      <option>Recreation</option>
      <option>Tips</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Please give your suggestions!</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button id='submitRec'>submit</button>
    {/* at the submit I should have an onlcik that reference a schema */}
    {/* #1 make sure everything is connected. Create the table in mysql.
    #2test that things are going into mysql.
    #create skeleton file tha */}

  </div>
</form>
</div>
            
            </div>

        )

    }
}

export default Recommendation