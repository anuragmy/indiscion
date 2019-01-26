class Indiscion extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: [ 'one', 'two', 'three', 'four' ]
		};
	}
	handleDeleteOption() {
		this.setState({
			options: []
		});
	}

	handlePick() {
		console.log('handlepick called');
		let number = Math.ceil(Math.random() * this.state.options.length);
		if (number === 5) number = 4;
		const choise = this.state.options[number];
		alert(choise);
	}

	handleAddOption(option) {
		if (this.state.options.indexOf(option) > -1) return alert('Option Already Exists');
		this.setState({
			options: this.state.options.concat(option)
		});
	}

	render() {
		const title = 'Indiscion App';
		const subTitle = 'Put your life in the hands of the computer';
		console.log(this.state.options.length);

		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} />
				<Actions hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-primary">{this.props.title}</h1>
				<h2 className="text-default">{this.props.subTitle}</h2>
			</div>
		);
	}
}

class Actions extends React.Component {
	render() {
		return (
			<div>
				<input
					disabled={!this.props.hasOptions}
					type="button"
					onClick={this.props.handlePick}
					value="What should I do?"
				/>;
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOption}>Remove All</button>
				{this.props.options.map((option) => <Option key={option} optionText={option} />)}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		const options = this.props.optionText;
		return <p>{options}</p>;
	}
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if (option) this.props.handleAddOption(option);
	}

	render() {
		return (
			<form onSubmit={this.handleAddOption}>
				<input type="text" name="option" />
				<button type="submit">Add Option</button>
			</form>
		);
	}
}

ReactDOM.render(<Indiscion className="text-center" />, document.getElementById('root'));
