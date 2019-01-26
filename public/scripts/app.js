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

		_this.state = {
			options: ['one', 'two', 'three', 'four']
		};
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		return _this;
	}

	_createClass(Indiscion, [{
		key: 'handleDeleteOption',
		value: function handleDeleteOption() {
			this.setState({
				options: []
			});
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
				React.createElement(Header, { title: title, subTitle: subTitle }),
				React.createElement(Options, { options: this.state.options, handleDeleteOption: this.handleDeleteOption }),
				React.createElement(Actions, { hasOptions: this.state.options.length > 0 }),
				React.createElement(AddOption, null)
			);
		}
	}]);

	return Indiscion;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					{ className: 'text-primary' },
					this.props.title
				),
				React.createElement(
					'h2',
					{ className: 'text-default' },
					this.props.subTitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Actions = function (_React$Component3) {
	_inherits(Actions, _React$Component3);

	function Actions() {
		_classCallCheck(this, Actions);

		return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
	}

	_createClass(Actions, [{
		key: 'handlePick',
		value: function handlePick() {
			alert('hap called');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement('input', {
					disabled: !this.props.hasOptions,
					type: 'button',
					onClick: this.handlePick,
					value: 'What should I do?'
				}),
				';'
			);
		}
	}]);

	return Actions;
}(React.Component);

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.props.handleDeleteOption },
					'Remove All'
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: 'render',
		value: function render() {
			var options = this.props.optionText;
			return React.createElement(
				'p',
				null,
				options
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption() {
		_classCallCheck(this, AddOption);

		return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();

			if (option) alert(option);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'form',
				{ onSubmit: this.handleAddOption },
				React.createElement('input', { type: 'text', name: 'option' }),
				React.createElement(
					'button',
					{ type: 'submit' },
					'Add Option'
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

var obj = {
	name: 'anurag',
	getName: function getName() {
		return this.name;
	}
};
var gname = obj.getName;
console.log(gname);

ReactDOM.render(React.createElement(Indiscion, { className: 'text-center' }), document.getElementById('root'));
