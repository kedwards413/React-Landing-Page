import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

export const Cards = props => {
	return (
		<div className="card" style="width: 18rem;">
			<img src={props.cardImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	cardImage: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};
