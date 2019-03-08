import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/categories';
import Category from './category/Category';
import '../../styles/categories.css';

// #Start of Categories component
class Categories extends Component {
	/* #Lifecycle method: Once component is mounted, make GET request for categories*/
	componentDidMount() {
		this.props.getCategories();
	}

	// #Define setList function to map a list of categories into Catergory component
	setList = (data) => data.map((list, index) => {
		return <Category className="categories-wrapcategories-flex-item item" key={index} category={list}></Category>;
	});

	render() {
		let { data } = this.props; // #Deconstruct props into blocked-scoped variable data

		const CategoryList = this.setList(data); // #Call setList and pass in categories via props, set equal to CategoryList 

		return (
			<div className="categories-wrapper">
				<h1>Ever wonder how to categorize the pure awesomeness that is Chuck Norris? Wonder no more! Click on one of the categories below to find out!</h1>
				<div className="categories-flex-container">
					{CategoryList}
				</div>
			</div>
		);
	}
}

/* #Define mapStateToProps method using blocked-scoped const to give access to props*/
const mapStateToProps = (state => {
	return state.categories; // #Return current state of categories
});

export default connect(mapStateToProps, { getCategories })(Categories);