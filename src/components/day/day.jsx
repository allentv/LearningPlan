import React, { Component, PropTypes } from 'react';

export default class Day extends Component {
	static propTypes = {
		day: PropTypes.number,
		active: PropTypes.bool.isRequired
	};

	static defaultPropTypes = {
		day: 0
	}

	// TODO: Import styles for 'active' and 'inactive' days
	// Remove the below after including SASS support and cssModules
	const styles = {
		active: '',
		inactive: ''
	};

	render() {
		return (
			<div style={ this.props.active ? styles.active : styles.inactive }>
				{ this.props.day }
			</div>
		);
	}
}