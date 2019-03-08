import React, { Component } from 'react';
import '../styles/main.css'; // #Import css for style

// #Start of Main component
class Main extends Component {
	// #Call to render method
	render() {
		return (
			<div>
				<div className="main-wrapper">
					<h1 className="main-title-text">That's right, Chuck "Badass" Norris!</h1>
					<div className="main-text-wrapper">
						<h3>In a world where truth is not truth and alternative facts are facts, Chuck Norris's round-house still rules. This app is going to rid the land of evil, and offer the best Chuck Norris jokes out there. </h3>
						<div className="main-desc">
							<p>What do movies, money, fashion all have in common? They're the kind of Chuck "Badass" Norris jokes you can find here by clicking on the catergories link. Looking for a specific joke? Like the sheer strength of Chuck Norris's Roundhouse, the jokes link will let you search and find the perfect one to knock the laughter out of you!</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;