import React, {Component} from 'react'
import {Header, Modal, Button} from 'semantic-ui-react'
import firebase from "../components/Firebase";
import { Dropdown } from 'semantic-ui-react'


const categories = [
    {
        text: 'Website Design',
        value: 'Website Design'
    },
    {
        text: 'Android App Development',
        value: 'Android App Development'
    },
    {
        text: 'IOS App development',
        value: 'IOS App Development'
    },
    {
        text: 'Data Processing',
        value: 'Data Processing'
    }
]
const skillOptions = [
    {key: 'Website Design', value: 'Website Design', text: 'Website Design' },
    {key: 'Searching', value: 'Searching', text: 'Searching' },
    {key: 'Java', value: 'Java', text: 'Java' },
    {key: 'Arduino', value: 'Arduino', text: 'Arduino' },
    {key: 'Python', value: 'Python', text: 'Python' },
    {key: 'JavaScript', value: 'JavaScript', text: 'JavaScript' },
    {key: 'Node.js', value: 'Node.js', text: 'Node.js' },
    {key: 'React', value: 'React', text: 'React' },
    {key: 'Ruby', value: 'Ruby', text: 'Ruby' },
    {key: 'C', value: 'C', text: 'C' },
    {key: 'Databases', value: 'Databases', text: 'Databases' }
]

class AddModal extends Component {
    addTask = e => {
        e.preventDefault();
        firebase.firestore().collection("Tasks").add({
            Title: this.refs.title.value,
            Category: this.refs.dropdown.state.value,
            Wage: "$" + this.refs.wage.value,
            ServiceHours: this.refs.serviceHours.value,
            Description: this.refs.description.value,
            Skills: this.refs.skills.state.value
        })
        .then((res) => {
            this.props.history.push("/task/profile/" + res.id)
        });
    };
    state = { open: false }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
    const { open, dimmer } = this.state
    return(
        <Modal dimmer={dimmer} open={open} onClose={this.close} trigger={<div onClick={(e) => e.preventDefault()} className="ui primary button" onClick={this.show('blurring')}>Create</div>}>
            <Modal.Header>Add a Task</Modal.Header>
            <Modal.Content>
            <Modal.Description>
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
                                    <Dropdown placeholder='Choose' ref="dropdown" fluid selection options ={categories}></Dropdown>
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
                                <Dropdown placeholder='Skills' ref="skills" fluid multiple search selection options={skillOptions} />
                            </div>
                            <div className="ui buttons">
                                <Button
                                onClick={this.close} content='Cancel'/>
                                <div className="or"></div>
                                <button className="ui positive button" onClick={(e) => { this.close(); this.addTask(e)}}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Description>
            </Modal.Content>
        </Modal>
    )
  }
}

export default AddModal