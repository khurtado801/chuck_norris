import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Categories from './categories/CategoriesContainer';
import Jokes from './jokes/JokesContainer';
import ViewedJokes from './viewedjokes/ViewedJokesContainer';
import '../styles/nav.css';

// #Start of Nav component
class Nav extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="collapse navbar-collapse navbar-ex1-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li><NavLink to="/">Home</NavLink></li>
								<li><NavLink to="/categories">Categories</NavLink></li>
								<li><NavLink to="/jokes">Jokes</NavLink></li>
								<li><NavLink to="/viewedjokes">ViewedJokes</NavLink></li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="content">
					<Switch>
						{/* Define routes */}
						<Route exact path='/' component={Main} />
						<Route path="/Categories" component={Categories} />
						<Route path="/Jokes" component={Jokes} />
						<Route path="/ViewedJokes" component={ViewedJokes}></Route>
					</Switch>
				</div>
			</div>
		);
	}
}

export default Nav;