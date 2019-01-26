import React, { Component } from 'react';
import { database } from 'firebase';

class WriteReport extends Component {
  render() {
    return (
        <div className="WriteReport">
            <div className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <label>Student Name</label>
                            <input type="text" placeholder="Task Title"></input>
                        </div>
                        <div className="field">
                            <label>Hours Worked</label>
                            <input type="text" placeholder="Task Title"></input>
                        </div>
                        <div className="field">
                            <label>Starting Date</label>
                            <input type="text" placeholder="Please format in (mm/dd/yyyy)"></input>
                        </div>
                        <div className="field">
                            <label>End Date</label>
                            <input type="text" placeholder="Please format in (mm/dd/yyyy)"></input>
                        </div>
                        <div className="field">
                            <label>Brief Description of Work Done</label>
                            <textarea rows="2"></textarea>
                        </div>
                    </div>
                </div>
        </div>
    );
  }
}

export default WriteReport;