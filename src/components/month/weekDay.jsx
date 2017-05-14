import React, { PropTypes } from 'react';

const WeekDay = props => {
	if (props.day === '') {
		return <td>{ ' ' }</td>;
	} else {
		return <td>{ props.day }</td>;
	}
};

WeekDay.propTypes = {
	day: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};

export default WeekDay;