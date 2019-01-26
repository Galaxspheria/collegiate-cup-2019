import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div className="Login pattern-bg">
            <div className="ui middle aligned center aligned grid page-height container">
                <div className="column centered">
                    <div className="width-cap">
                        <h2 className="ui teal image header">
                        <div className="content">
                            Sign in to your account
                        </div>
                        </h2>
                        <form className="ui large form">
                        <div className="ui teal segment">
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address"></input>
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"></input>
                            </div>
                            </div>
                            <div className="ui fluid large teal submit button">Login</div>
                        </div>
                        </form>
                        <div className="ui message">
                        New student?&nbsp;&nbsp;<a href="#">Enter signup code!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
