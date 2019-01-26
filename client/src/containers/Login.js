import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div className="Login pattern-bg">
            <div className="ui middle aligned center aligned grid page-height container">
                <div className="column centered">
                    <div className="width-cap">
                        <h2 class="ui teal image header">
                        <div class="content">
                            Sign in to your account
                        </div>
                        </h2>
                        <form class="ui large form">
                        <div class="ui teal segment">
                            <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address"></input>
                            </div>
                            </div>
                            <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"></input>
                            </div>
                            </div>
                            <div class="ui fluid large teal submit button">Login</div>
                        </div>
                        </form>
                        <div class="ui message">
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
