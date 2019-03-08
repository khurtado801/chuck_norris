import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewedJokes } from '../../../redux/viewedJokes';
import '../../../styles/jokes.css';

// #Start of JokeList component
class JokeList extends Component {
	// #Call render method
	render() {
		let { icon_url, value } = this.props.joke; //#Destruct props joke
		return (
			<div className="joke-wrapper">
				<div className="joke-container wrap">
					<div className="category-joke-item joke-item" onClick={() => this.props.viewedJokes(this.props.joke)}>
						<p>{value}</p>
						<img src={icon_url} alt={icon_url} className="joke-image" />
						{
							// #JSX ternary check if value of category is not null
							this.props.joke.category != null ?
								<div className="category-text">Category: {this.props.joke.category}</div> // #If not null, render value of category
								:
								<div className="category-text">Cateogry Not Found</div> // #If null, render string
						}
					</div>
				</div>
			</div>
		);
	}
}

/* #Define mapStateToProps method using blocked-scoped const to give access to props*/
function mapStateToProps(state) {
	return {
		jokes: state.viewedJokes // #Set jokes equal to current state of viewedJokes
	};
}

export default connect(mapStateToProps, { viewedJokes })(JokeList);