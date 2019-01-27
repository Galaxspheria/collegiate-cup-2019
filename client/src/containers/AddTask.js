import React, { Component } from 'react';
import firebase from "../components/Firebase";

const categories = [
    "Website Design", 
    "Android App Development", 
    "IOS App development", 
    "Data Processing"
]

class AddTask extends Component {
    addTask = e => {
        e.preventDefault();

        firebase.firestore().collection("Tasks").add({
            Title: this.refs.title.value,
            Category: this.refs.category.value,
            Wage: "$" + this.refs.wage.value,
            ServiceHours: this.refs.serviceHours.value,
            Description: this.refs.description.value,
            Skills: this.refs.skills.value.split(",").map(str => str.trim())
        })
        .then((res) => {
            this.props.history.push("/TaskProfile/" + res.id)
        });
    };
    
  render() {
    return (
        <div className="AddTask">
            <div className="ui center container">
                <div className="ui form">
                    <div className="two fields">
                        <div className="field">
                            <label>Task Title</label>
                            <input type="text" ref="title" placeholder="Task Title"></input>
                        </div>
                        <div className="field">
                            <label>Category</label>
                            <select className="ui search dropdown" ref="category">
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
                        <input type="number" ref="wage" placeholder="Wage" id="wage" min="0"></input>
                    </div>
                    
                    <br></br><label>Service Hours</label><br></br>
                    <div className="ui labeled input">
                        <label for="wage" class="ui label"><i className="clock icon"></i></label>
                        <input type="number" ref="serviceHours" placeholder="Service Hours" id="wage" min="0"></input>
                    </div>
                    <div className="field">
                        <label>Quick Description</label>
                        <textarea rows="2" ref="description"></textarea>
                    </div>
                    <div className="field">
                        <label>Skills</label>
                        <textarea rows="2" ref="skills" placeholder="Separate skills with commas"></textarea>
                    </div>
                    <div className="ui buttons">
                        <a className="ui button" href={"/CompanyProfile"}>Cancel</a>
                        <div className="or"></div>
                        <button className="ui positive button" onClick={(e) => this.addTask(e)}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AddTask;
