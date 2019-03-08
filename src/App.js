import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div className="app-wrapper">
				<AppBar title="Ken Hurtado">
					<div className="banner">
						<p>Chuck Norris</p>
					</div>
				</AppBar>
				<Nav />
			</div>
		);
	}
}

export default App;
