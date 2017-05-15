import { action, observable } from 'mobx';

export default class AppStore {
	@observable currentMonth = 'Some Month';
	@observable currentYear = 'Some Year';

	@action
	setCurrentMonth(month) {
		this.currentMonth = month;
	}

	@action
	setCurrentYear(year){
		this.currentYear = year;
	}
}