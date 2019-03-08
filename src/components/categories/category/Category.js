import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../../../redux/joke';
import { viewedJokes } from '../../../redux/viewedJokes';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../../../styles/category.css';

const theme = createMuiTheme({
	typography: {
		// #Style: Tell Material-UI what the font-size on the html element is.
		htmlFontSize: 2,
	},
});

// #Start of Category component
class Category extends Component {
	state = {
		open: false,
	}

	/* #Onclick event handler - Define handleCategory method using ES6 arrow function syntax */
	handleCategory = (usrCateogry) => { // #Pass in category selected by user
		   this.props.getJoke(usrCateogry); // #Call getJoke from props and pass in category from event
		   this.setState({ // #Set this instance of state 
			   open: true  // #of Boolean variable to true
		   });
	   }

	// #Onclick event handler - Definition of handleCLose method using ES6 arrow function syntax
	handleClose = () => {
		this.setState({ // #Set this instance of state
			open: false // #of Boolean variable to false
		});
		this.props.viewedJokes(this.props.joke); //#Call to viewedJokes from props and pass in prop value of joke
	};

	// #Call to render method
	render() {
		const { value, icon_url } = this.props.joke; // #Destruct props value of joke

		return (
			<div className="category-wrapper">
	  				<div className="category-flex-container category-wrap">
	  					<MuiThemeProvider theme={theme}>
						<p className="category-joke-item category-flex-item"><Button className="category-joke-text"  onClick={() => this.handleCategory(this.props.category)}>{this.props.category}</Button></p>
	  					</MuiThemeProvider>
	  					<Dialog className="category-dialog-wrapper"
	  						open={this.state.open}
	  						onClose={this.handleClose}
	  						aria-labelledby="alert-dialog-title"
	  						aria-describedby="alert-dialog-description"
	  					>
	  						<DialogTitle id="alert-dialog-title">{''}</DialogTitle>
	  						<DialogContent>
	  							<DialogContentText id="alert-dialog-description">
								  {
									  // #JSX ternary check if value of category is not null
									  this.props.joke.category != null ?
									  <h1 className="category-text">Category: {this.props.joke.category}</h1> // #If not null, render value of category
									  :
									  'Cateogry Not Found:' // #If null, render string
								}
								<img src={icon_url} alt={icon_url} className="joke-image" />
								{value}
	  							</DialogContentText>
	  						</DialogContent>
	  						<DialogActions>
	  							<Button className="category-joke-text" onClick={this.handleClose} color="primary" autoFocus>
									Close
	  							</Button>
	  						</DialogActions>
					</Dialog>
				</div>
			</div>
		);
	}
}

/* #Define mapStateToProps method using blocked-scoped const to give access to props*/
const mapStateToProps = (state => {
	return state.joke; // #Return current state of joke
});

export default connect(mapStateToProps, { getJoke, viewedJokes })(Category);