import React from 'react';
import css from'../search.css';
import axios from 'axios';
class Search extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
			PlaydateResults: 0,
			OpenFacilities: 0,
		};

		this.cancel = '';
    }
    render() {
		return (
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
			)
	}
}
 

export default Search