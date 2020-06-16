import React, {Component} from 'react'
import axios from 'axios'
import css from'../search.css';
import { Link } from 'react-router-dom'

class Profile extends Component {
    constructor() {
        super()
    }


    render() {
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
    <button class="btn btn-outline-success" type="button"><Link to="/recommendation-form">News Feed</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/Profile">Profile</Link></button>

 </form>
</nav>
                
            <div>
                <h1>Welcome to Willie</h1>
               <h3><ul>Doggy Profile</ul>
                <ul>Name:Kygo</ul>
                <ul>Breed:Havanese</ul>
                <ul>Age:1</ul>
                <ul>Activity level: High</ul>
                <ul>Size: small</ul>
                <ul>Gender:Male</ul></h3>
            </div>
            </div>

        )

    }
}

export default Profile