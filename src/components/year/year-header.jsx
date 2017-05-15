import autobind from 'autobind-decorator';
import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

import './year.scss';


@inject('store')
@observer
export default class YearHeader extends Component {
	static propTypes = {
		store: PropTypes.shape({
			currentMonth: PropTypes.string,
			currentYear: PropTypes.string
		})
	}

	@autobind
	monthChangeHandler(event) {
		event.preventDefault();
	}

	render() {
		console.log(this.props);
		
		const { currentMonth, currentYear } = this.props.store;
		return (
			<div styleName='yearHeader'>
				<div styleName='yearHeader--monthYear'>
					<span styleName='yearHeader--monthYear__month'>{ currentMonth }</span>
					<span styleName='yearHeader--monthYear_year'>{ currentYear }</span>
				</div>
				<div styleName='yearHeader--selector'>
					SELECTOR
				</div>
			</div>
		);
	}
}