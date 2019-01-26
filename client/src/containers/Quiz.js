import React, { Component } from 'react';
import AceEditor from 'react-ace';
import '../styles/Quiz.css';

import 'brace/mode/python';
import 'brace/theme/monokai';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 'print("Hello World")',
            pyOutput: ["Click the green arrow to run your code."],
        };
    }

    run = async e => {
        e.preventDefault();
        const response = await fetch('/api/py', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.code }),
        });
        const body = await response.text();
        this.setState({ pyOutput: body.split(',') });
    };

    render() {
        return (
            <div className="Quiz">
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
                        {this.state.pyOutput.length > 0?
                            this.state.pyOutput.map((line) => <span>{line}<br/></span>)
                        :null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;
