import React, { Component } from 'react';
import firebase from "../components/Firebase";

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Users').doc(this.props.match.params.id);
    this.unsubscribe = null;
    this.state = {}
  }

  componentDidMount() {
    const that = this;
    this.ref.get().then(function (doc) {
      if (doc.exists) {
        that.setState({user: doc.data()})
      } else {
        console.log("No such document!"); // TODO: 404
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  render() {
    console.log(this.state.user)
    return (
        <div className="StudentProfile pattern-bg page-height">
          {this.state.user?
            <div class="ui equal width centered grid container">
                <div className="four wide column">
                  <div className="ui image">
                    <img src={this.state.user.ProfilePic}/>
                  </div>
                </div>
                <div class="twelve wide column">
                  <div class="ui segment">
                  {this.state.user.FirstName + " " + this.state.user.LastName}
                  <br></br>
                  High School: Fariview HS
                  <br></br>
                  Age: 17
                  <br></br>
                  Tier: 5
                  <br></br>
                  Speciality: Not Web dev lol
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

export default StudentProfile;
