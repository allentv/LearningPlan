import React, { PropTypes } from 'react';

import WeekDay from 'month/weekDay';


const Week = props => {
	return (
		<tr>
		{
			props.weekData.map(day => {
				return <WeekDay day={ day } />;
			})
		}
		</tr>
	);
};

Week.propTypes = {
	weekData: PropTypes.array.isRequired
};

export default Week;
