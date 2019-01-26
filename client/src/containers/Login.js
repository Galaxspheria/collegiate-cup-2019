import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div className="Login">
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                    <h2 class="ui teal image header">
                    <div class="content">
                        Log-in to your account
                    </div>
                    </h2>
                    <form class="ui large form">
                    <div class="ui stacked segment">
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
                    New student? <a href="#">Enter sign up code</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
