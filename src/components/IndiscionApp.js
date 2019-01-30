import AddOption from './AddOption';
import Option from './Option';
import Header from './Header';
import Actions from './Actions';
import Options from './Options';

export default class Indiscion extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = {
			options: []
		};
	}
	handleDeleteOptions() {
		this.setState({
			options: []
		});
	}
	handleDeleteOption(optionToRemove) {
		console.log('hdo', optionToRemove);
		this.setState({
			options: this.state.options.filter((option) => optionToRemove !== option)
		});
	}

	handlePick() {
		console.log('handlepick called');

		let number = Math.round(Math.random() * this.state.options.length);
		const choise = this.state.options[number];
		alert(choise);
	}

	handleAddOption(option) {
		if (!option) return 'Enter valid value';
		if (this.state.options.indexOf(option) > -1) return alert('Option Already Exists');
		this.setState({
			options: this.state.options.concat(option)
		});
	}

	componentDidMount() {
		try {
			const json = JSON.parse(localStorage.getItem('options'));
			if (json) this.setState({ options: json });
		} catch (error) {
			console.log(error);
		}
	}

	componentDidUpdate(prevSatate, nextState) {
		if (prevSatate.options.length !== this.state.options.length) console.log('saving data');
		const json = JSON.stringify(this.state.options);
		localStorage.setItem('options', json);
		console.log(localStorage.getItem('items'));
	}

	render() {
		const title = 'Indiscion App';
		const subTitle = 'Put your life in the hands of the computer';
		console.log(this.state.options.length);

		return (
			<div>
				<Header />
				<Actions hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<AddOption handleAddOption={this.handleAddOption} />
				<Options
					handleDeleteOption={this.handleDeleteOption}
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
			</div>
		);
	}
}
