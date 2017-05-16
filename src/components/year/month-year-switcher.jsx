import autobind from 'autobind-decorator';
import React, { Component, PropTypes } from 'react';
import { inject } from 'mobx-react';

import { SWITCHER_VIEW_CHOICE_MONTH, SWITCHER_VIEW_CHOICE_YEAR } from 'app/constants';

import './year.scss';

@inject('store')
export default class MonthYearSwitcher extends Component {
	static propTypes = {
		store: PropTypes.object
	};

	@autobind
	onViewChangeHandler(event) {
		event.preventDefault();
		this.props.store.setCurrentView(event.target.value);
	}

	render() {
		return (
			<div styleName='yearHeader--selector'>
				<button id="btnMonth"
						value={ SWITCHER_VIEW_CHOICE_MONTH }
						onClick={ this.onViewChangeHandler }>
						Month
				</button> &nbsp;
				<button id="btnYear"
						value={ SWITCHER_VIEW_CHOICE_YEAR }
						onClick={ this.onViewChangeHandler }>
					Year
				</button>
			</div>
		);
	}
}