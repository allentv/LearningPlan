import React, { Component, PropTypes } from 'react';

import MonthBody from 'month/month-body';
import MonthHeader from 'month/month-header';
import Week from 'month/week';
import WeekDay from 'month/week-day';

import './month.scss';


export default class Month extends Component {
	monthDays = {
		1: 31, 2: 28, 3: 31,  4: 30,  5: 31,  6: 30,
		7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
	};

	static propTypes = {
		month: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).isRequired
	};

	getMonthDays() {
		return this.monthDays[this.props.month];
	}

	render() {
		return (
			<table styleName='monthContent'>
				<MonthHeader />
				<MonthBody daysOfMonth={ this.getMonthDays() } />
			</table>
		);
	}
}