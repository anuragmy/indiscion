'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indiscion = function (_React$Component) {
	_inherits(Indiscion, _React$Component);

	function Indiscion(props) {
		_classCallCheck(this, Indiscion);

		var _this = _possibleConstructorReturn(this, (Indiscion.__proto__ || Object.getPrototypeOf(Indiscion)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

		_this.state = {
			options: props.options
		};
		return _this;
	}

	_createClass(Indiscion, [{
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState({
				options: []
			});
		}
	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			console.log('hdo', optionToRemove);
			this.setState({
				options: this.state.options.filter(function (option) {
					return optionToRemove !== option;
				})
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			console.log('handlepick called');

			var number = Math.round(Math.random() * this.state.options.length);
			var choise = this.state.options[number];
			alert(choise);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) return 'Enter valid value';
			if (this.state.options.indexOf(option) > -1) return alert('Option Already Exists');
			this.setState({
				options: this.state.options.concat(option)
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = JSON.parse(localStorage.getItem('options'));
				if (json) this.setState({ options: json });
			} catch (error) {
				console.log(error);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevSatate, nextState) {
			if (prevSatate.options.length !== this.state.options.length) console.log('saving data');
			var json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log(localStorage.getItem('items'));
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'Indiscion App';
			var subTitle = 'Put your life in the hands of the computer';
			console.log(this.state.options.length);

			return React.createElement(
				'div',
				null,
				React.createElement(Header, null),
				React.createElement(Actions, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption }),
				React.createElement(Options, {
					handleDeleteOption: this.handleDeleteOption,
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions
				})
			);
		}
	}]);

	return Indiscion;
}(React.Component);

Indiscion.defaultProps = {
	options: ['one', 'two', 'three', 'four']
};

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			{ className: 'text-primary' },
			props.title
		),
		props.subTitle && React.createElement(
			'h2',
			{ className: 'text-default' },
			props.subTitle
		)
	);
};

Header.defaultProps = {
	title: 'Indiscion App!',
	subTitle: 'Put your life in the hands of the computer'
};

var Actions = function Actions(props) {
	return React.createElement(
		'div',
		null,
		React.createElement('input', { disabled: !props.hasOptions, type: 'button', onClick: props.handlePick, value: 'What should I do?' }),
		';'
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'Please add items to get started!'
		),
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		props.options.map(function (option) {
			return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
		})
	);
};

var Option = function Option(props) {
	//console.log(props);
	var options = props.optionText;
	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			options
		),
		React.createElement(
			'button',
			{
				onClick: function onClick(e) {
					props.handleDeleteOption(options);
				}
			},
			'Remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();
			e.target.elements.option.value = '';
			var error = this.props.handleAddOption(option);
			this.setState({ error: error });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						{ type: 'submit' },
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(Indiscion, { options: ['devil', 'negi'], className: 'text-center', name: 'anurag', age: '34' }), document.getElementById('root'));
