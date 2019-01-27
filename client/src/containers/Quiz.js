import React, { Component } from 'react';
import AceEditor from 'react-ace';
import '../styles/Quiz.css';

import 'brace/mode/python';
import 'brace/theme/monokai';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'def isAlphabetical(word):\n  # YOUR CODE HERE\n\nprint(isAlphabetical("almost"))',
            pyOutput: ["Click the green arrow to run your code."],
            pyError: [],
            loading: false,
            submitting: false,
            submitted: false,
            finalOutput: [],
            finalError: []
        };
    }

    run = async e => {
        e.preventDefault();
        this.setState({loading: true})
        const response = await fetch('/api/py', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.code }),
        });
        var body = await response.text();
        body = body.split(',');
        const successCode = body.splice(0, 1)[0];
        if (successCode === "S") {
            this.setState({ pyOutput: body, pyError: [], loading: false });
        } else {
            this.setState({ pyOutput: [], pyError: body, loading: false });
        }
    };

    submit = async e => {
        e.preventDefault();
        this.setState({submitting: true})
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.code }),
        });
        var body = await response.text();
        body = body.split(',');
        const successCode = body.splice(0, 1)[0];
        if (successCode === "S") {
            this.setState({ finalOutput: body, finalError: [], submitting: false, submitted: true });
        } else {
            this.setState({ finalOutput: [], finalError: body, submitting: false, submitted: true });
        }
    };

    render() {
        return (
            <div className="Quiz">
                <div className="ui container vertical-padded">
                    <div className="content">
                        <div className="ui center aligned teal inverted segment">
                            <h2>
                                Skill Assessment
                            </h2>
                        </div>
                        <h3>
                            Your challenge, should you choose to accept it...
                        </h3>
                        <h5>Description</h5>
                        <p>A handful of words have their letters in alphabetical order, that is, nowhere in the word do you change direction if you were to scan along the English alphabet. An example is the word "almost", which has its letters in alphabetical order.
                            <br/><br/>Your challenge today is to write a program that can determine if the letters in a word are in alphabetical order.
                            <br/><br/>Note: your program will be tested with other inputs not shown here. Make sure to test edge cases on your own before submitting.
                        </p>
                        <div className="ui divider"></div>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <h5>Input</h5>
                                <p>You'll be given one English word. Examples:</p>
                                <div className="ui message">
                                    <code>almost<br/>cereal</code>
                                </div>
                            </div>
                            <div className="eight wide column">
                                <h5>Output</h5>
                                <p>Your program should return the word and if it is in order or not. Examples:</p>
                                <div className="ui message">
                                    <code>almost IN ORDER<br/>cereal NOT IN ORDER</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quiz-flex">
                    <AceEditor
                        width="50%"
                        className="code-editor"
                        mode="python"
                        theme="monokai"
                        name="blah2"
                        onLoad={this.onLoad}
                        onChange={(e) => this.setState({ code: e })}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={this.state.code}
                        setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                        }}/>
                    <div className="code-output">
                        <h5><button className="code-run" type="button" onClick={(e) => this.run(e)}><i className="play icon"></i></button> OUTPUT</h5>
                        <div className="ui divider"></div>
                        {this.state.loading?
                            <div class="ui active inline loader"></div>
                        :
                            <div>
                                {this.state.pyOutput.length > 0?
                                    this.state.pyOutput.map((line) => <span>{line}<br/></span>)
                                :null}
                                <div className="code-error">
                                    {this.state.pyError.length > 0?
                                        this.state.pyError.map((line) => <span>{line}<br/></span>)
                                    :null}
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="ui container vertical-padded">
                    <div className="content" style={{"text-align":"center"}}>
                        <h3>
                            Ready to go?
                        </h3>
                        <p>When you're ready to submit your code, press the button below. Note that you cannot modify your answer after this.
                        </p>
                        {!this.state.submitted?
                            <button className={this.state.submitting? "ui right labeled teal big icon button loading" : "ui right labeled teal big icon button"} onClick={((e) => this.submit(e))}>
                            <i className="right arrow icon"></i>
                            Submit
                            </button>
                        :null}
                    </div>
                    {(this.state.finalOutput || this.state.finalError) && (this.state.finalOutput.length > 0 || this.state.finalError.length > 0)?
                        <div className="code-output-final">
                            {this.state.finalOutput.length > 0?
                                this.state.finalOutput.map((line) => <span className={line.slice(-5) === "false" ? "failed-text" :""}>{line}<br/></span>)
                            :null}
                            {this.state.finalError.length > 0?
                                this.state.finalError.map((line) => <span className="failed-text">{line}<br/></span>)
                            :null}
                        </div>
                    :null}
                </div>
            </div>
        );
    }
}

export default Quiz;
