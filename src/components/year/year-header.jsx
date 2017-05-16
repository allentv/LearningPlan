import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

import MonthYearNavigator from './month-year-navigator';
import MonthYearSwitcher from './month-year-switcher';

import './year.scss';

const YearHeader = props => {
	const { currentMonthStr, currentYear } = props.store;
	return (
		<div styleName='yearHeader'>
			<div styleName='yearHeader--monthYear'>
				<span styleName='yearHeader--monthYear__month'>{ currentMonthStr }</span>
				&nbsp;
				<span styleName='yearHeader--monthYear_year'>{ currentYear }</span>
			</div>
			<MonthYearSwitcher />
			<MonthYearNavigator />
		</div>
	);
};

YearHeader.propTypes = {
	store: PropTypes.shape({
		currentMonth: PropTypes.string,
		currentYear: PropTypes.string
	})
};

export default inject('store')(observer(YearHeader));