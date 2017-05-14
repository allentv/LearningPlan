import React, { Component } from 'react';

import Year from 'year/year';

export default class App extends Component {
	render() {
		return (
			<div class='container-fluid'>
				<Year year={ 2017 } month={ 5 } />
			</div>
		);
	}
}
