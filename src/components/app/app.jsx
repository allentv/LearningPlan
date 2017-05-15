import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import AppStore from './app-store.mobx';
import YearHeader from 'year/year-header';
import Year from 'year/year';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.appStore = new AppStore();
	}

	render() {
		return (
			<Provider store={ this.appStore }>
				<div class='container-fluid'>
					<YearHeader />
					<Year year={ 2017 } month={ 5 } />
				</div>
			</Provider>
		);
	}
}
