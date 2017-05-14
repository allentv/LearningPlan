import React, { Component, PropTypes } from 'react';

import Month from 'month/month';

import './year.scss';

export default class Year extends Component {
	static propTypes = {
		year: PropTypes.number.isRequired,
		month: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.object  // This could be a list of months
		])
	};

	static defaultProps = {
		month: 1  // Show the month of January by default
	}

	render() {
		return (
			<Month month={ this.props.month} />
		);
	}
}