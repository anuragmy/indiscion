import AddOption from './AddOption';
import Option from './Option';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import OptionModal from './OptionModal';
import React from 'react';

export default class Indiscion extends React.Component {
	state = {
		options: [ 'negi', 'suraj' ],
		selectedOption: undefined
	};
	handleDeleteOptions = () => {
		this.setState({
			options: []
		});
	};

	handleDeleteOption = (optionToRemove) => {
		console.log('hdo', optionToRemove);
		this.setState({
			options: this.state.options.filter((option) => optionToRemove !== option)
		});
	};

	handlePick = () => {
		let number = Math.round(Math.random() * this.state.options.length);
		const choise = this.state.options[number];
		this.setState({ selectedOption: choise });
	};

	handleClearSelectionOption = () => {
		this.setState({ selectedOption: undefined });
	};

	handleAddOption = (option) => {
		if (!option) return 'Enter valid value';
		if (this.state.options.indexOf(option) > -1) return alert('Option Already Exists');
		this.setState({
			options: this.state.options.concat(option)
		});
	};

	componentDidMount = () => {
		try {
			const json = JSON.parse(localStorage.getItem('options'));
			if (json) this.setState({ options: json });
		} catch (error) {
			console.log(error);
		}
	};

	// componentDidUpdate = (prevSatate, nextState) => {
	// 	if (prevSatate.options.length !== this.state.options.length) console.log('saving data');
	// 	const json = JSON.stringify(this.state.options);
	// 	localStorage.setItem('options', json);
	// 	console.log(localStorage.getItem('items'));
	// };

	render() {
		const title = 'Indiscion App';
		const subTitle = 'Put your life in the hands of the computer';

		return (
			<div>
				<Header />
				<div className="container">
					<Actions hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				</div>

				<div className=" container widget">
					<div className="container">
						<Options
							handleDeleteOption={this.handleDeleteOption}
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
						/>
					</div>
					<div className="container">
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<div className="container">
					<OptionModal
						selectedOption={this.state.selectedOption}
						handleClearSelectionOption={this.handleClearSelectionOption}
					/>
				</div>
			</div>
		);
	}
}
