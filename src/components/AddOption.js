import React, { Component } from 'react';

export default class AddOption extends React.Component {
	state = {
		errors: undefined
	};
	handleAddOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		e.target.elements.option.value = '';
		const error = this.props.handleAddOption(option);
		this.setState({ error });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button type="submit">Add Option</button>
				</form>
			</div>
		);
	}
}
