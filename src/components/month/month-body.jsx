import React, { PropTypes } from 'react';

import Week from 'month/week';


const MonthBody = props => {
	let data = [];
		const NUMBER_OF_WEEKS = Math.ceil(props.daysOfMonth / 7);
		const weekDataArray = [
			[ 1,  2,  3,  4,  5,  6,  7],
			[ 8,  9, 10, 11, 12, 13, 14],
			[15, 16, 17, 18, 19, 20, 21],
			[22, 23, 24, 25, 26, 27, 28],
			[29, 30, 31, '', '', '', '']
		];
		for(let i=0; i < NUMBER_OF_WEEKS; i++) {
			data.push(<Week weekData={ weekDataArray[i] } />);
		}
		return <tbody>{ data }</tbody>;
};

MonthBody.propTypes = {
	daysOfMonth: PropTypes.number.isRequired
};

export default MonthBody;
