import React, { Component} from 'react'
import { Link } from 'react-router-dom'

// import LoginForm from 'Components/login-form.js'

class Home extends Component {
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
 </form>
</nav>
                
            <div>
                <h1>Welcome to DoggieDate</h1>
                <p>The premiere doggie play date finding site in NYC</p>
                {/* <button>Signup</button>
                <button>Login</button>
                <button><Link to="/login">Login</Link></button> */}
                {/* <button variant="btn btn-success" onClick={() => LoginForm.push('/Products')}>Click button to view products</button> */}
                <img style={imageStyle} src="https://www.silvernickelpuppies.com/wp-content/uploads/2020/01/DOGS-IN-NY.png" />
            </div>
            </div>

        )

    }
}

export default Home