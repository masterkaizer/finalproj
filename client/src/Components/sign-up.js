import React, {Component} from 'react'
import axios from 'axios'
import { render } from 'react-dom'

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
        <div className="SignupForm">
        <h4>Sign up</h4>
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
                        // value={this.state.username}
                        // onChange={this.handleChange}
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
                        // value={this.state.password}
                        // onChange={this.handleChange}
                    />
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
        </form>
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