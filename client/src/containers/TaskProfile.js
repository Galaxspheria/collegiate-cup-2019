import React, { Component } from 'react';
import firebase from "../components/Firebase";

class TaskProfile extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Tasks').doc(this.props.match.params.id);
    this.unsubscribe = null;
    this.state = {}
  }

  componentDidMount() {
    const that = this;
    this.ref.get().then(function (doc) {
      if (doc.exists) {
        that.setState({task: doc.data()})
      } else {
        console.log("No such document!"); // TODO: 404
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  render() {
    return (
        <div className="StudentProfile pattern-bg page-height">
          {this.state.task?
            <div class="ui equal width centered grid container">
                <div class="twelve wide column">
                  <div class="ui segment">
                  <h2>{this.state.task.Title}</h2>
                  <i className="folder open outline icon"></i> {this.state.task.Status}
                  <br></br>
                  <i className="dollar sign icon"></i> {this.state.task.Wage}
                  <br></br>
                  <i className="clock outline icon"></i> {this.state.task.ServiceHours}
                  <br></br>
                  <i className="calendar outline icon"></i> {this.state.task.DateCreated}
                  <br></br>

                  {this.state.task.AcceptedUser ?
                  <div>
                  <i className="user icon"></i>  {this.state.task.AcceptedUser}
                  </div>
                  : <p></p>}


                  
                  <div class="ui divider"></div>
                  <h4>Task Description:</h4> {this.state.task.Description}
                  <h4>Skills Required:</h4> {this.state.task.Skills.map((item) =>
                        <div class="ui label yellow">{item}</div>
                  )}
                  </div>
                </div>
            </div>

          :
            <div className="ui equal width centered grid container">
              <h2>Uh oh! That profile can't be found.</h2>
            </div>
          }
        </div>
    );
  }
}

export default TaskProfile;
