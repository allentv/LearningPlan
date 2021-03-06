import React, { PropTypes } from 'react';

import './month.scss';

const WeekDay = props => {
	if (props.day === '') {
		return <td>{ ' ' }</td>;
	} else {
		let cellStyle = 'monthBody--dayOfWeek';
		// Random check to change the style. Should be changed later to map with actual data.
		if (props.day % 6 === 0) {
			cellStyle += ' monthBody--dayOfWeek__notes';
		}
		if (props.weekEnd) {
			cellStyle += ' monthBody--dayOfWeek__weekEnd';
		}
		return <td styleName={ cellStyle }>{ props.day }</td>;
	}
};

WeekDay.propTypes = {
	day: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	weekEnd: PropTypes.bool
};

export default WeekDay;