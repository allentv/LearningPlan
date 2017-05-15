import React, { PropTypes } from 'react';

import WeekDay from 'month/weekDay';


const Week = props => {
	return (
		<tr>
		{
			props.weekData.map(day => {
				// First and last day of the week are weekend days and hence grayed out
				return <WeekDay day={ day } weekEnd={ day % 7 == 0 || day % 7 == 1 } />;
			})
		}
		</tr>
	);
};

Week.propTypes = {
	weekData: PropTypes.array.isRequired
};

export default Week;
