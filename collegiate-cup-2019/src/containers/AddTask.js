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
                        <div className="ui form">
                            <div class="field">
                                <label>Category</label>
                                <select class="ui search dropdown">
                                    <option value="">Select Category</option>
                                    {categories.map((category)=> (
                                        <option value="AF">{category}</option>
                                    ))}
                                </select>
                            </div>
                            </div>
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
