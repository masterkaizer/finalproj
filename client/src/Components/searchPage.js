import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Redirect from '@material-ui/core/redirect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Axios from 'axios';
import { Link } from 'react-router-dom'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            items: []

        };
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    handleKeyPress(event) {
        if (event.key === 'Enter')
            this.search();

    }

    search() {
        let query = this.state.query;
        const BASE_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5Qi_Mx5QQ2OVwlk39jeRX6tnFLiAnGWs&callback=initMap" + query;
        fetch(BASE_URL, { method: "GET" })
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({
                    items: items
                })

            })
        console.log("clicked on search  button", this.state.query);
    }
    handleChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    view = (link) => {
        window.open(link)
    }


    openfacilities = (parks, groomers, store, link) => {
        let obj = {
            parks: parks,
            groomers: groomers,
            store: store,
            link: link
        }

        console.log(obj)
        Axios.post('http://localhost:3011/api/', obj).then(
            res => {
                console.log(res)
                this.props.snack('here your search', 'success')
            },
            err => {
                console.log(err)
            }
        )
    }
    render() {

        return (
            <>
                <FormControl variant="outlined" style={{ marginTop: '30px', width: '100%' }}>
                    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                    <OutlinedInput
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onClick={this.search}
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>

                <div>
                    {this.state.items ?
                        this.state.items.map((item, i) => {
                            let { parksName, hours, locations, description } = item.volumeInfo
                            return (
                                <Card style={{ margin: '15px 0' }}>
                                <CardContent>
//                               The grid creates visual consistency between layouts while allowing flexibility across a wide
//                               variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.
                                        <Grid container spacing={3}>
                                            <Grid item xs={8}>
                                                <h3>{parksName}</h3>
                                                {locations ? <p>
                                                    located here &ensp;
                                                    {locations.map(name => {
                                                        return (
                                                            <span>{name},&ensp;</span>
                                                        )
                                                    })}
                                                </p> : null}
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button variant="outlined"
                                                    style={{ float: 'right' }}
                                                    onClick={() => { this.view(parksName) }}
                                                    color="secondary">
                                                    View
                                        </Button>
                                                <Button variant="outlined"
                                                    style={{ float: 'right', marginRight: '20px' }}
                                                    onClick={() => { this.savePark(parksName, hours, locations, description) }}
                                                    color="secondary">
                                                    Save
                                        </Button>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <p style={{ marginTop: '0' }}>{description}</p>
                                            </Grid>

                                        </Grid>
                                   </CardContent>
                                </Card>

                            );
                        })
                        : null
                    }</div>
            </>
        )
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
  <div>

                <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button"><Link to="/">Home</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/login">Login</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/signup">Sign up</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/searchPage">Search Page</Link></button>
    <button class="btn btn-outline-success" type="button"><Link to="/recommendation-form">News Feed</Link></button>

 </form>
</nav>
			<div className="container">
				
				<img  src="\images\logo.png"/>
				<h2 className="heading">Search what you need</h2>
				
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
            </div>
	
            )
    }
}
}
export default Search