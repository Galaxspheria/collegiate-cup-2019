import React, { Component } from 'react';
import BGParticles from '../components/BGParticles';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            loading: false
        }
    }

    login() {
        const that = this;
        this.setState({loading: true})
        setTimeout(() => {
            const pw = this.refs.password.value.slice(0,1)[0];
            if (pw === "s" || pw === "S") {
                that.props.history.push("/dashboard/student/")
            } else if (pw === "c" || pw === "C") {
                that.props.history.push("/dashboard/organization/")
            } else {
                that.setState({error: "Your username or password is incorrect.", loading: false})
            }
        }, 750)
    }

    render() {
    return (
        <div className="Login">
            <div className="ui middle aligned center aligned grid page-height container particle-window">
                <div className="column centered">
                    <div className="width-cap">
                        {this.state.error?
                            <div className="ui error message">
                            <div className="header">
                                Uh oh!
                            </div>
                            <p>{this.state.error}</p>
                            </div>
                        :null}
                        <h2 className="ui teal image header">
                        <div className="content">
                            Sign In
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
                                <input type="password" ref="password" name="password" placeholder="Password"></input>
                            </div>
                            </div>
                            <div onClick={() => this.login()} className={this.state.loading? "ui fluid large teal submit button loading" : "ui fluid large teal submit button"}>Login</div>
                        </div>
                        </form>
                        <div className="ui message">
                        New student?&nbsp;&nbsp;<a href="#">Enter signup code!</a>
                        </div>
                    </div>
                </div>
            </div>
            <BGParticles/>
        </div>
    );
    }
}

export default Login;
