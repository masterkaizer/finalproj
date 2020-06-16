import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        // axios
        //     .post('/user/login', {
        //         username: this.state.username,
        //         password: this.state.password
        //     })
        //     .then(response => {
        //         console.log('login response: ')
        //         console.log(response)
        //         if (response.status === 200) {
        //             // update App.js state
        //             this.props.updateUser({
        //                 loggedIn: true,
        //                 username: response.data.username
        //             })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/Profile'
                    });}
                

    render() {return(
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
                    <img  src="\images\logo.png"/>
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button class="btn btn-outline-success" type="button"><Link to="/Profile">Login</Link></button>
                            {/* <button
                                className="btn btn-primary col-1 col-mr-auto"
                               
                                onClick={this.handleSubmit}
                                type="submit">Login</button> */}
                        </div>
                    </form>
                </div>
     )
    }
}

export default LoginForm