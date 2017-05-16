import { action, computed, observable } from 'mobx';

import {
	MONTHS,
	NAVIGATOR_VIEW_CHOICE_NEXT,
	NAVIGATOR_VIEW_CHOICE_PREVIOUS,
	NAVIGATOR_VIEW_CHOICE_TODAY,
	SWITCHER_VIEW_CHOICE_MONTH
} from './constants';

export default class AppStore {
	constructor() {
		this.today = new Date();
		this.currentMonth = this.calculateCurrentMonth;
		this.currentYear = this.calculateCurrentYear;
	}

	@observable currentMonth;
	@observable currentYear;
	@observable currentView = SWITCHER_VIEW_CHOICE_MONTH;

	@action
	setCurrentMonth(month) {
		this.currentMonth = month;
	}

	@action
	setCurrentYear(year){
		this.currentYear = year;
	}

	@action
	setCurrentView(view) {
		this.currentView = view;
	}

	@action
	changeNavigation(newValue) {
		// TODO: Calculate the current month & year to be displayed
	}

	@computed get currentMonthStr() {
		return MONTHS[this.currentMonth - 1];
	}

	@computed
	get calculateCurrentMonth() {
		return this.today.getMonth() + 1;
	}

	@computed
	get calculateCurrentYear() {
		return this.today.getFullYear();
	}
}