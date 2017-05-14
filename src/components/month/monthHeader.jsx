import React, { PropTypes } from 'react';

import { WEEKDAYS } from './constants';

import './month.scss';


const MonthHeader =  props => {
	return (
		<thead styleName='monthHeader'>
			<tr>
				{
					WEEKDAYS.map( day => {
						return (
							<th styleName='monthHeader--dayOfWeek'>
								{ day }
							</th>
						);
					})
				}
			</tr>
		</thead>
	);
};

export default MonthHeader;
