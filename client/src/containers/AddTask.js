import React, { Component } from 'react';
import { database } from 'firebase';

const categories = [
    "Website Design", 
    "Android App Development", 
    "IOS App development", 
    "Data Processing"
]

class AddTask extends Component {
  render() {
    return (
        <div className="AddTask">
            <div className="ui center container">
                <div className="ui form">
                    <div className="two fields">
                        <div className="field">
                            <label>Task Title</label>
                            <input type="text" placeholder="Task Title"></input>
                        </div>
                        <div className="field">
                            <label>Category</label>
                            <select class="ui search dropdown">
                                <option value="">Select Category</option>
                                {categories.map((category)=> (
                                    <option value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <label>Wage</label><br></br>
                    <div className="ui labeled input">
                        <label for="wage" class="ui label"><i className="dollar icon"></i></label>
                        <input type="number" placeholder="Wage" id="wage" min="0"></input>
                    </div>
                    
                    <br></br><label>Service Hours</label><br></br>
                    <div className="ui labeled input">
                        <label for="wage" class="ui label"><i className="clock icon"></i></label>
                        <input type="number" placeholder="Wage" id="wage" min="0"></input>
                    </div>
                    <div className="field">
                        <label>Quick Description</label>
                        <textarea rows="2"></textarea>
                    </div>
                    <div className="field">
                        <label>Skills</label>
                        <textarea rows="2" placeholder="Separate skills with commas"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AddTask;
