class Indiscion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [ 'one', 'two', 'three', 'four' ]
		};
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
	}
	handleDeleteOption() {
		this.setState({
			options: []
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
				<Actions hasOptions={this.state.options.length > 0} />
				<AddOption />
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
	handlePick() {
		alert('hap called');
	}

	render() {
		return (
			<div>
				<input
					disabled={!this.props.hasOptions}
					type="button"
					onClick={this.handlePick}
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
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();

		if (option) alert(option);
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

const obj = {
	name: 'anurag',
	getName() {
		return this.name;
	}
};
const gname = obj.getName;
console.log(gname);

ReactDOM.render(<Indiscion className="text-center" />, document.getElementById('root'));
