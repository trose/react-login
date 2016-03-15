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

	var Login = React.createClass({
	    displayName: 'Login',

	    render: function render() {
	        var loginStyle = {
	            background: '#423142',
	            position: 'absolute',
	            width: '230px',
	            height: '115px',
	            top: '50%',
	            left: '50%',
	            transform: 'translate(-50%, -50%)',
	            borderRadius: '2px'
	        };

	        var usernameStyle = {
	            marginBottom: '10px',
	            height: '35px',
	            borderRadius: '2px'
	        };

	        var iconStyle = {
	            textAlign: 'center',
	            position: 'relative',
	            top: '50%',
	            transform: 'translateY(-50%)'
	        };

	        var inputStyle = {
	            color: '#9c9c9c',
	            border: 'none',
	            height: '35px',
	            display: 'inline-block',
	            padding: '0 0 0 7px',
	            fontSize: '11px',
	            WebkitAppearance: 'none',
	            outline: 'none'
	        };

	        var submitButtonStyle = {
	            display: 'inline-block',
	            height: '35px',
	            width: '35px',
	            cursor: 'pointer',
	            color: '#FEFEFE',
	            border: 'none',
	            borderRadius: '0 2px 2px 0',
	            background: '#AD6BAD'
	        };

	        var usernameInputStyle = Object.assign({}, inputStyle, {
	            borderRadius: '0 2px 2px 0',
	            width: 'calc(100% - 35px)'
	        });

	        var passwordInputStyle = Object.assign({}, inputStyle, {
	            width: 'calc(100% - 70px)',
	            verticalAlign: 'top'
	        });

	        var indicatorStyle = {
	            display: 'inline-block',
	            color: '#877787',
	            verticalAlign: 'top',
	            height: '35px',
	            width: '35px',
	            borderRight: '1px solid #DCDCDC',
	            borderRadius: '2px 0 0 2px',
	            background: '#DEDEDE'
	        };

	        var arrowStyle = {
	            width: 0,
	            height: 0,
	            borderLeft: '7px solid transparent',
	            borderRight: '7px solid transparent',
	            borderTop: '7px solid ' + loginStyle.background,
	            position: 'absolute',
	            top: loginStyle.height,
	            left: '17px'
	        };

	        var subtextStyle = {
	            position: 'absolute',
	            width: loginStyle.width,
	            top: loginStyle.height,
	            padding: '16px',
	            color: '#594F5F'
	        };

	        var forgotStyle = {
	            fontSize: '11px',
	            textDecoration: 'underline',
	            verticalAlign: 'baseline',
	            float: 'right'
	        };

	        var passwordIndicatorStyle = Object.assign({}, indicatorStyle, {});

	        return React.createElement(
	            'div',
	            { style: loginStyle },
	            React.createElement('div', { className: 'gradientScroll', style: { background: '#AABBCC', height: '3px' } }),
	            React.createElement(
	                'div',
	                { className: 'signinContent', style: { height: '100%', padding: '16px' } },
	                React.createElement(
	                    'div',
	                    { className: 'username', style: usernameStyle },
	                    React.createElement(
	                        'div',
	                        { style: indicatorStyle },
	                        React.createElement('div', { className: 'icon-user', style: iconStyle })
	                    ),
	                    React.createElement('input', { style: usernameInputStyle, placeholder: 'Username' })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'password', style: { borderRadius: '2px' } },
	                    React.createElement(
	                        'div',
	                        { style: passwordIndicatorStyle },
	                        React.createElement('div', { className: 'icon-key', style: iconStyle })
	                    ),
	                    React.createElement('input', { style: passwordInputStyle, placeholder: 'Password' }),
	                    React.createElement(
	                        'div',
	                        { style: submitButtonStyle },
	                        React.createElement('div', { className: 'icon-arrow-right', style: iconStyle })
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { style: subtextStyle },
	                React.createElement(
	                    'span',
	                    { style: { fontSize: '16px' } },
	                    'SIGN IN'
	                ),
	                React.createElement(
	                    'a',
	                    { style: forgotStyle },
	                    'forgot?'
	                )
	            ),
	            React.createElement('div', { style: arrowStyle })
	        );
	    }
	});
	React.render(React.createElement(Login, null), document.getElementById('content'));

/***/ }
/******/ ]);