class Indiscion extends React.Component {
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

const Header = (props) => {
	return (
		<div>
			<h1 className="text-primary">{props.title}</h1>
			{props.subTitle && <h2 className="text-default">{props.subTitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indiscion App!',
	subTitle: 'Put your life in the hands of the computer'
};

const Actions = (props) => {
	return (
		<div>
			<input disabled={!props.hasOptions} type="button" onClick={props.handlePick} value="What should I do?" />;
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			{props.options.length === 0 && <p>Please add items to get started!</p>}
			<button onClick={props.handleDeleteOptions} disabled={!props.options.length}>
				Remove All
			</button>
			{props.options.map((option) => (
				<Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
			))}
		</div>
	);
};

const Option = (props) => {
	//console.log(props);
	const options = props.optionText;
	return (
		<div>
			<p>{options}</p>
			<button
				onClick={(e) => {
					props.handleDeleteOption(options);
				}}
			>
				Remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		e.target.elements.option.value = '';
		const error = this.props.handleAddOption(option);
		this.setState({ error });
	}

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

ReactDOM.render(
	<Indiscion options={[ 'devil', 'negi' ]} className="text-center" name="anurag" age="34" />,
	document.getElementById('root')
);
