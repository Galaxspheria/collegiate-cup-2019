import React, { Component } from 'react';

class StudentProfile extends Component {
  render() {
    return (
        <div className="StudentProfile">
          <div class="ui equal width centered grid">
              <div className="column">
                <img src="/images/image.png" height="300px" width="300px"></img>
              </div>
              <div class="twelve wide column">
                <div class="ui segment">
                Lucas Kiefer
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
          
        </div>
    );
  }
}

export default StudentProfile;
