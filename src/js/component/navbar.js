import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

export const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				{props.title}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							{props.navHome}{" "}
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.navAbout}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.navContact}
						</a>
					</li>
				</ul>
				<span className="navbar-text">Made with React</span>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string,
	navHome: PropTypes.string,
	navAbout: PropTypes.string,
	navContact: PropTypes.string
};
//Navbar End
