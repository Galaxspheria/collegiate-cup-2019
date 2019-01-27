import React, {Component} from 'react'
import {Header, Modal, Button} from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

class FeedbackModal extends Component {
    state = { open: false }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
    const { open, dimmer } = this.state
    return(
        <Modal dimmer={dimmer} open={open} onClose={this.close} trigger={<div onClick={(e) => e.preventDefault()} className="ui attached green button" onClick={() => {this.show('blurring'); this.props.complete()}}>Complete</div>}>
            <Modal.Header>Feedback</Modal.Header>
            <Modal.Content>
            <Modal.Description>
            <div className="Add Task">
            <div className="ui form">
                <div className="ui center container">
                <div className="ui row">
                        <div className="ui form">
                        <div className="field">
                            <label>Student Name</label>
                            <input type="text" placeholder="Full Name"></input>
                        </div>
                        <div className="field">
                            <label>Hours Worked</label>
                            <input type="text" placeholder="Hours"></input>
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
                    <br></br>
                    <Button
                                onClick={this.close} content='Submit'/>

                </div>
                </div>
        </div>
            </Modal.Description>
            </Modal.Content>
        </Modal>
    )
  }
}

export default FeedbackModal