'use strict';

import { createStore } from 'redux';

const loginStore = (state = [], action) => {
  switch (action.type) {
    case 'login':
        state.loading = true;
        state.error = false;
        return state;
    case 'login_finished':
        state.loading = false;
        state.error = true;
        return state;
    case 'clear_error':
        state.error = false;
        state.loading = false;
        return state;
    default:
      return state;
  }
};

var store = createStore(loginStore);

var Login = React.createClass({
    componentDidMount: function() {
        this.unsubscribe = store.subscribe(this.handleStoreChange);
    },

    handleStoreChange: function() {
        this.setState(store.getState());
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    clickHandler: function() {
        store.dispatch({type: 'login'});

        setTimeout(function() {
            store.dispatch({type: 'login_finished'});
        }, 1000);

        setTimeout(function() {
            store.dispatch({type: 'clear_error'});
        }, 4000);
    },

    render: function() {
        var errorMessage;
        var gradientClass = 'gradientScroll';

        var iconStyle = {
            textAlign: 'center',
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)'
        }

        var indicatorStyle = {
            display: 'inline-block',
            color: '#877787',
            verticalAlign: 'top',
            height: '35px',
            width: '35px',
            borderRight: '1px solid #DCDCDC',
            borderRadius: '2px 0 0 2px',
            background: '#DEDEDE'
        }

        var passwordIndicatorStyle = Object.assign({}, indicatorStyle, {})

        var buttonIcon = <div className="icon-arrow-right" style={iconStyle} />;

        if (store.getState().loading) {
            var loadingIconStyle = {
                textAlign: 'center',
                marginTop: '9px',
                animationName: 'spin',
                animationDuration: '1000ms',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
            };
            buttonIcon = <div className="icon-loop2" style={loadingIconStyle} />;

            gradientClass += ' animate';
        }
        var indicatorIcon = <div className="icon-user" style={iconStyle} />;

        if (store.getState().error) {
            var leftArrowStyle = {
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '6px solid #E62163',
                position: 'absolute',
                top: '11px',
                left: '-6px'
            }

            indicatorStyle.background = '#E62163';
            var errorIconStyle = Object.assign({}, iconStyle, {color: 'white'});

            indicatorIcon = <div className="icon-notification" style={errorIconStyle} />

            errorMessage = <div className="errorMessage">Oops!<div style={leftArrowStyle} /></div>;
        }

        return (<div className="login">
            <div className={gradientClass} style={{height: '3px'}}/>
            <div className="signinContent" style={{height: '100%', padding: '16px'}}>
                {errorMessage}
                <div className="username">
                    <div style={indicatorStyle}>
                        {indicatorIcon}
                    </div>
                    <input placeholder="Username" />
                </div>
                <div className="password" style={{borderRadius: '2px'}}>
                    <div style={passwordIndicatorStyle}>
                        <div className="icon-key" style={iconStyle} />
                    </div>
                    <input placeholder="Password" />
                    <div className="submitButton" onClick={this.clickHandler}>
                        {buttonIcon}
                    </div>
                </div>
            </div>
            <div className="subtext">
                <span>SIGN IN</span>
                <a>forgot?</a>
            </div>
        </div>);
    }
});
React.render(<Login />, document.getElementById('content'));