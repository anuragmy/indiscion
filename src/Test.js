class Test extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.showDetails = this.showDetails.bind(this);
		this.state = {
			count: 0,
			visibility: false
		};
	}
	handleAddOne() {
		console.log('handleAddOne');
		this.setState({ count: this.state.count + 1 });
	}
	handleMinusOne() {
		console.log('handleMinusOne');
		this.setState({ count: this.state.count - 1 });
	}
	handleReset() {
		console.log('handleReset');
		this.setState({ count: 0 });
	}

	showDetails() {
		console.log('show details clicked');
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		});
	}

	render() {
		const { visibility } = this.state;
		return (
			<div>
				<h1>Count : {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>+Reset</button>
				<button onClick={this.showDetails}>{visibility ? 'hide details' : 'show detils'}</button>
				{visibility ? <div>these are the details</div> : null}
			</div>
		);
	}
}

ReactDOM.render(<Test />, document.getElementById('root'));
