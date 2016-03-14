'use strict';

var Login = React.createClass({
    render: function() {
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

        var userNameInputStyle = {
            height: '100%',
            color: '#9c9c9c',
            border: 'none',
            height: '35px',
            WebkitAppearance: 'none',
            borderRadius: '0 2px 2px 0',
            outline: 'none',
            width: 'calc(100% - 45px)'
        };

        var indicatorStyle = {
            display: 'inline-block',
            height: '35px',
            width: '35px',
            borderRadius: '2px 0 0 2px',
            background: 'red'
        }

        return (<div style={loginStyle}>
            <div className="gradientScroll" style={{background: '#AABBCC', height: '3px'}}/>
            <div className="signinContent" style={{height: '100%', padding: '20px'}}>
                <div className="username" style={userNameStyle}>
                    <span ref="indicator" style={indicatorStyle}>X</span>
                    <input style={userNameInputStyle} placeholder="Username" />
                </div>
                <div className="password" style={{borderRadius: '2px'}}>
                    <input placeholder="Password" />
                    <button style={{width: '50px'}} />
                </div>
            </div>
        </div>);
    }
});
React.render(<Login />, document.getElementById('content'));