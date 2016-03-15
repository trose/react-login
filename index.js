'use strict';

var Login = React.createClass({
    render: function() {
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
        }

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
        }

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
        }

        var forgotStyle = {
            fontSize: '11px',
            textDecoration: 'underline',
            verticalAlign: 'baseline',
            float: 'right'
        }

        var passwordIndicatorStyle = Object.assign({}, indicatorStyle, {})

        return (<div style={loginStyle}>
            <div className="gradientScroll" style={{background: '#AABBCC', height: '3px'}}/>
            <div className="signinContent" style={{height: '100%', padding: '16px'}}>
                <div className="username" style={usernameStyle}>
                    <div style={indicatorStyle}>
                        <div className="icon-user" style={iconStyle} />
                    </div>
                    <input style={usernameInputStyle} placeholder="Username" />
                </div>
                <div className="password" style={{borderRadius: '2px'}}>
                    <div style={passwordIndicatorStyle}>
                        <div className="icon-key" style={iconStyle} />
                    </div>
                    <input style={passwordInputStyle} placeholder="Password" />
                    <div style={submitButtonStyle}>
                        <div className="icon-arrow-right" style={iconStyle} />
                    </div>
                </div>
            </div>
            <div style={subtextStyle}>
                <span style={{fontSize: '16px'}}>SIGN IN</span>
                <a style={forgotStyle}>forgot?</a>
            </div>
            <div style={arrowStyle} />
        </div>);
    }
});
React.render(<Login />, document.getElementById('content'));