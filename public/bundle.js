/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Indiscion = function (_React$Component) {\n\t_inherits(Indiscion, _React$Component);\n\n\tfunction Indiscion(props) {\n\t\t_classCallCheck(this, Indiscion);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Indiscion.__proto__ || Object.getPrototypeOf(Indiscion)).call(this, props));\n\n\t\t_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);\n\t\t_this.handlePick = _this.handlePick.bind(_this);\n\t\t_this.handleAddOption = _this.handleAddOption.bind(_this);\n\t\t_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);\n\n\t\t_this.state = {\n\t\t\toptions: []\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(Indiscion, [{\n\t\tkey: 'handleDeleteOptions',\n\t\tvalue: function handleDeleteOptions() {\n\t\t\tthis.setState({\n\t\t\t\toptions: []\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'handleDeleteOption',\n\t\tvalue: function handleDeleteOption(optionToRemove) {\n\t\t\tconsole.log('hdo', optionToRemove);\n\t\t\tthis.setState({\n\t\t\t\toptions: this.state.options.filter(function (option) {\n\t\t\t\t\treturn optionToRemove !== option;\n\t\t\t\t})\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'handlePick',\n\t\tvalue: function handlePick() {\n\t\t\tconsole.log('handlepick called');\n\n\t\t\tvar number = Math.round(Math.random() * this.state.options.length);\n\t\t\tvar choise = this.state.options[number];\n\t\t\talert(choise);\n\t\t}\n\t}, {\n\t\tkey: 'handleAddOption',\n\t\tvalue: function handleAddOption(option) {\n\t\t\tif (!option) return 'Enter valid value';\n\t\t\tif (this.state.options.indexOf(option) > -1) return alert('Option Already Exists');\n\t\t\tthis.setState({\n\t\t\t\toptions: this.state.options.concat(option)\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\ttry {\n\t\t\t\tvar json = JSON.parse(localStorage.getItem('options'));\n\t\t\t\tif (json) this.setState({ options: json });\n\t\t\t} catch (error) {\n\t\t\t\tconsole.log(error);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'componentDidUpdate',\n\t\tvalue: function componentDidUpdate(prevSatate, nextState) {\n\t\t\tif (prevSatate.options.length !== this.state.options.length) console.log('saving data');\n\t\t\tvar json = JSON.stringify(this.state.options);\n\t\t\tlocalStorage.setItem('options', json);\n\t\t\tconsole.log(localStorage.getItem('items'));\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar title = 'Indiscion App';\n\t\t\tvar subTitle = 'Put your life in the hands of the computer';\n\t\t\tconsole.log(this.state.options.length);\n\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(Header, null),\n\t\t\t\tReact.createElement(Actions, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),\n\t\t\t\tReact.createElement(AddOption, { handleAddOption: this.handleAddOption }),\n\t\t\t\tReact.createElement(Options, {\n\t\t\t\t\thandleDeleteOption: this.handleDeleteOption,\n\t\t\t\t\toptions: this.state.options,\n\t\t\t\t\thandleDeleteOptions: this.handleDeleteOptions\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Indiscion;\n}(React.Component);\n\nvar Header = function Header(props) {\n\treturn React.createElement(\n\t\t'div',\n\t\tnull,\n\t\tReact.createElement(\n\t\t\t'h1',\n\t\t\t{ className: 'text-primary' },\n\t\t\tprops.title\n\t\t),\n\t\tprops.subTitle && React.createElement(\n\t\t\t'h2',\n\t\t\t{ className: 'text-default' },\n\t\t\tprops.subTitle\n\t\t)\n\t);\n};\n\nHeader.defaultProps = {\n\ttitle: 'Indiscion App!',\n\tsubTitle: 'Put your life in the hands of the computer'\n};\n\nvar Actions = function Actions(props) {\n\treturn React.createElement(\n\t\t'div',\n\t\tnull,\n\t\tReact.createElement('input', { disabled: !props.hasOptions, type: 'button', onClick: props.handlePick, value: 'What should I do?' }),\n\t\t';'\n\t);\n};\n\nvar Options = function Options(props) {\n\treturn React.createElement(\n\t\t'div',\n\t\tnull,\n\t\tprops.options.length === 0 && React.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Please add items to get started!'\n\t\t),\n\t\tReact.createElement(\n\t\t\t'button',\n\t\t\t{ onClick: props.handleDeleteOptions, disabled: !props.options.length },\n\t\t\t'Remove All'\n\t\t),\n\t\tprops.options.map(function (option) {\n\t\t\treturn React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });\n\t\t})\n\t);\n};\n\nvar Option = function Option(props) {\n\t//console.log(props);\n\tvar options = props.optionText;\n\treturn React.createElement(\n\t\t'div',\n\t\tnull,\n\t\tReact.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\toptions\n\t\t),\n\t\tReact.createElement(\n\t\t\t'button',\n\t\t\t{\n\t\t\t\tonClick: function onClick(e) {\n\t\t\t\t\tprops.handleDeleteOption(options);\n\t\t\t\t}\n\t\t\t},\n\t\t\t'Remove'\n\t\t)\n\t);\n};\n\nvar AddOption = function (_React$Component2) {\n\t_inherits(AddOption, _React$Component2);\n\n\tfunction AddOption(props) {\n\t\t_classCallCheck(this, AddOption);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));\n\n\t\t_this2.handleAddOption = _this2.handleAddOption.bind(_this2);\n\t\t_this2.state = {\n\t\t\terror: undefined\n\t\t};\n\t\treturn _this2;\n\t}\n\n\t_createClass(AddOption, [{\n\t\tkey: 'handleAddOption',\n\t\tvalue: function handleAddOption(e) {\n\t\t\te.preventDefault();\n\t\t\tvar option = e.target.elements.option.value.trim();\n\t\t\te.target.elements.option.value = '';\n\t\t\tvar error = this.props.handleAddOption(option);\n\t\t\tthis.setState({ error: error });\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'form',\n\t\t\t\t\t{ onSubmit: this.handleAddOption },\n\t\t\t\t\tReact.createElement('input', { type: 'text', name: 'option' }),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ type: 'submit' },\n\t\t\t\t\t\t'Add Option'\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn AddOption;\n}(React.Component);\n\nReactDOM.render(React.createElement(Indiscion, { options: ['devil', 'negi'], className: 'text-center', name: 'anurag', age: '34' }), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js?");

/***/ })

/******/ });