/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Login = React.createClass({
	    displayName: 'Login',

	    render: function render() {
	        var _userNameInputStyle;

	        var loginStyle = {
	            backgroundColor: '#423142',
	            position: 'absolute',
	            width: '230px',
	            height: '115px',
	            top: '50%',
	            left: '50%',
	            transform: 'translate(-50%, -50%)',
	            borderRadius: '2px'
	        };

	        var userNameStyle = {
	            marginBottom: '5px',
	            height: '35px',
	            borderRadius: '2px'
	        };

	        var userNameInputStyle = (_userNameInputStyle = {
	            height: '100%',
	            color: '#9c9c9c',
	            border: 'none'
	        }, _defineProperty(_userNameInputStyle, 'height', '35px'), _defineProperty(_userNameInputStyle, 'WebkitAppearance', 'none'), _defineProperty(_userNameInputStyle, 'borderRadius', '0 2px 2px 0'), _defineProperty(_userNameInputStyle, 'outline', 'none'), _defineProperty(_userNameInputStyle, 'width', 'calc(100% - 45px)'), _userNameInputStyle);

	        var indicatorStyle = {
	            display: 'inline-block',
	            height: '35px',
	            width: '35px',
	            borderRadius: '2px 0 0 2px',
	            background: 'red'
	        };

	        return React.createElement(
	            'div',
	            { style: loginStyle },
	            React.createElement('div', { className: 'gradientScroll', style: { background: '#AABBCC', height: '3px' } }),
	            React.createElement(
	                'div',
	                { className: 'signinContent', style: { height: '100%', padding: '20px' } },
	                React.createElement(
	                    'div',
	                    { className: 'username', style: userNameStyle },
	                    React.createElement(
	                        'span',
	                        { ref: 'indicator', style: indicatorStyle },
	                        'X'
	                    ),
	                    React.createElement('input', { style: userNameInputStyle, placeholder: 'Username' })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'password', style: { borderRadius: '2px' } },
	                    React.createElement('input', { placeholder: 'Password' }),
	                    React.createElement('button', { style: { width: '50px' } })
	                )
	            )
	        );
	    }
	});
	React.render(React.createElement(Login, null), document.getElementById('content'));

/***/ }
/******/ ]);