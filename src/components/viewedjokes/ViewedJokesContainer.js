import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewedJokes } from '../../redux/viewedJokes';
import Viewed from './viewed/Viewed';
import '../../styles/viewed.css';

// #Start of ViewedJokes component
class ViewedJokes extends Component {

	render() {
		let { jokes } = this.props; // #Deconstruct props

		/* #Map data array into Catergory array to fill unordered list*/
		const JokesMap = jokes.map((joke, id) => {
			return (
				// Set key equal to value of index
				<ul key={id}>
					<li>
						<Viewed className="categories-wrapcategories-flex-item item" joke={joke}></Viewed>
					</li>
				</ul>
			);
		});

		return (
			<div className="viewed-wrapper">
				<h1>Chuck knows when you are sleeping, chuck knows when you're awake. Chuck knows what jokes you have viewed!</h1>
				<div className="categories-flex-container">
					{JokesMap}
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

export default connect(mapStateToProps, { viewedJokes })(ViewedJokes);