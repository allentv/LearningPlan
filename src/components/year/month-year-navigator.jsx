import autobind from 'autobind-decorator';
import React, { Component, PropTypes } from 'react';
import { inject } from 'mobx-react';

import {
	NAVIGATOR_VIEW_CHOICE_NEXT,
	NAVIGATOR_VIEW_CHOICE_PREVIOUS,
	NAVIGATOR_VIEW_CHOICE_TODAY
} from 'app/constants';

import './year.scss';

@inject('store')
export default class MonthYearNavigator extends Component {
	static propTypes = {
		store: PropTypes.shape({
			currentMonth: PropTypes.string,
			currentYear: PropTypes.string
		}),
	};

	@autobind
	onNavigationChangeHandler(event) {
		event.preventDefault();
		this.props.store.changeNavigation(event.target.value);
	}

	render() {
		return (
			<div styleName='yearHeader--selector'>
				<button id="btnLeft" value={ NAVIGATOR_VIEW_CHOICE_PREVIOUS }>{ '<' }</button>
				&nbsp;
				<button id="btnToday" value={ NAVIGATOR_VIEW_CHOICE_TODAY }>Today</button>
				&nbsp;
				<button id="btnRight" value={ NAVIGATOR_VIEW_CHOICE_NEXT }>{ '>' }</button>
			</div>
		);
	}
}