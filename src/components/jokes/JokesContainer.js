import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getJokeList } from '../../redux/jokes';
import JokeList from './jokesList/JokeList';
import Button from '@material-ui/core/Button';
import '../../styles/jokes.css';

class JokesContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			icon_url: '',
			url: '',
			jokes: [],
			open: false,
		};
	}

	// #GET request to chucknorris API
	getJoke = (e) => {
		let { userInput } = this.state; // #Destruct state
		e.preventDefault(); // #Prevent refresh
		this.props.getJokeList(userInput);
	}

	// #Method to clear previous state of userInput and set value to target of userInput
    handleTextChange = (e) => {
    	let { value } = e.target; // #Set variable to current value of target event
    	this.setState(() => {
    		/**
             * #Clear previous state of arrays, then set state of userInput to current value, return value of userInput for GET request
             */
    		return {
    			...initalState, userInput: value
    		};
    	});
    };
	
	setJoke = (jokes) => jokes.map((joke, index) => {
		return <JokeList key={index} joke={joke}></JokeList>;
	});

	// #Method to clear user input from input field
    clearInputs = () => {
    	this.setState({ // #Set state on this instance of variable to empty string
    		userInput: ''
    	});
    };

	// #Call to render method
    render() {
    	let { userInput } = this.state; // #Deconstruct state into userInput
    	let { jokes } = this.props.jokes; // #Destruct props jokes into jokes
    	const joke = this.setJoke(jokes);

    	return (
    		<div>
    			<div className="jokes-wrapper">
    				<h1 className="jokes-title-text">They once made a Chuck Norris toilet paper, but it wouldn't take crap from anybody.</h1>
    				<h3>There's nothing funny about a kidney punch from Chuck Norris. So search for a joke that is funny. Clicking on a joke will add it to your viewed jokes list.</h3>
    			</div>
    			<div className="jokes-wrapper">
    				<Form inline onSubmit={this.getJoke} className="jokes-text-wrapper">
    					<FormGroup className="jokes-form-group">
    						<ControlLabel className="jokes-control-label"><h4>Chuck Norris says, "Enter any search term or take a flying kick to the face!"</h4></ControlLabel>
    						{' '}
    						<FormControl 
    							className="jokes-form-control"
    							type="text"
    							placeholder="search here"
    							name="joke-search"
    							onChange={this.handleTextChange}
    							value={userInput}
    						/>
    					</FormGroup>
    					{' '}
    					<Button variant="outlined" color="primary" type="submit">Submit</Button>
    				</Form>
    			</div>
    			<div>
    				{joke}
    			</div>
    		</div>
    	);
    }
}

const initalState = {
	jokes: [],
	icon_url: '',
	url: '',
};

/* #Define mapStateToProps method using blocked-scoped const to give access to props*/
const mapStateToProps = state => ({
	jokes: state.jokes // #Set jokes equal to current state of jokes
});

export default connect(mapStateToProps, { getJokeList })(JokesContainer);