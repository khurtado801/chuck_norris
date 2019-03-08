import React, { Component } from 'react';
import '../../../styles/joke.css';

// Start of Viewed component
class Viewed extends Component {
	// #Call to render method
	render() {
		let { icon_url, value } = this.props.joke; //#Destruct props of joke
		return (
			<div className="category-joke-item joke-item">
				{value}
				<br />
				<img src={icon_url} alt={icon_url} className="joke-image" />
				{
					// #JSX ternary check if value of category is not null
					this.props.joke.category != null ?
						<div className="category-text">Category: {this.props.joke.category}</div> // #If not null, render value of category
						:
						<div className="category-text">Cateogry Not Found</div> // #If null, render string
				}
			</div>
		);
	}
}

export default Viewed;