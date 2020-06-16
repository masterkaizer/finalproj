import React, {Component} from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

//create class
class Signup extends Component {
    constructor(){
        super()
        this.sate={
            username:"",
            password:"",
            confirmPasswrod:"",
        }
    }
        //add in functions name and use .bind with this. if we are not suing the arrow function
    handleChange(event){
        this.setstate({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();//not sure if I need the ;
        axios.post('/user/',{
            username:this.state.username,
            password:this.state.password
        })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('successful signup')
                this.setState({ //redirect to login page
                    redirectTo: '/login'
                })
            } else {
                console.log('username already taken')
            }
        }).catch(error => {
            console.log('signup error: ');
            console.log(error);

        });

    };
render()
{ return(
    <div>
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
    
        <div className="SignupForm">
            <img  src="\images\logo.png"/>
        <h4>Sign up</h4>
            <h3>Please fill in the below inorder to create your profile.</h3>
            <ul><input type="text" placeholder="Username"/></ul>
            <ul><input type="text" placeholder="Password"/></ul>
            <ul><input type="text" placeholder="First Name"/></ul>
            <ul><input type="text" placeholder="Email"/></ul>
            <ul><input type="text" placeholder="Dog's name"/></ul>
           <ul> <input type="text" placeholder="Breed"/></ul>
            <ul><input type="text" placeholder="Size"/></ul>
          <ul><input type="text" placeholder="Age"/></ul>
            <ul><input type="text" placeholder="Activity level"/></ul>
            <ul><input type="text" placeholder="Gender"/></ul>
            <div className="form-group">
                <div className="col-1 col-ml-auto">
                    <label className="form-label" htmlFor="password"> </label>
                </div>
                <div className="col-3 col-mr-auto">
                </div>
            </div>
            <div className="form-group ">
                <div className="col-7"></div>
                <button
                    className="btn btn-primary col-1 col-mr-auto"
                    // onClick={this.handleSubmit}
                    type="submit"
                >Sign up</button>
            </div>
    </div>
    </div>

);
}
}

export default Signup


// <div class="container">
//   <div class="columns">
//     <div class="column col-">col-3</div>
//     <div class="column col-3">col-3</div>
//   </div>
// </div>