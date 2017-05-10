import React, { Component, PropTypes } from 'react';

import MonthConstants from './constants';

export default class Month extends Component {
	static propTypes = {
		days: PropTypes.number.isRequired,
		startDay: PropTypes.oneOf(MonthConstants.DAYS).isRequired
	};

	static defaultPropTypes = {
		days: MonthConstants.DEFAULT_DAYS_IN_A_MONTH,
		startDay: MonthConstants.START_OF_WEEK
	}

	render() {
		return (
			<div>
				{
					// TODO: Figure out how to create a table using DIVs
				}
			</div>
		);
	}
}