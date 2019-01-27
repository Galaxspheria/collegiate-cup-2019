import React, { Component } from 'react';
import firebase from "../components/Firebase";

class StudentResources extends Component {
  render() {
    return (
        <div className="StudentResources">
          <div className="ui container midz title-header">
            <h1 style={{fontSize: 40}}>Project Shatter</h1>
            <div className="ui teal inverted segment" style={{display: "inline-block"}}>
              <h3>Breaking down barriers</h3>
            </div>
          </div>
          <div className="ui white container segment teal homepage midz">
            <div className="ui items homepage-content">
              <div className="item">
                <div className="ui small image">
                  <img src="/images/gaOutline.png"/>
                </div>
                <div className="content">
                  <div className="header">A Problem in Need of a Solution</div>
                  <div className="description">
                    <h2>A Few Shocking Statistics</h2>
                    <ul>
                      <li>25% of children in Georgia live in a home with an income at or less than the federal poverty level.</li>
                      <li>28.1% of Georgians live without access to broadband.</li>
                      <li>Atlanta experienced a 10.4% increase in jobs while more rural regions saw a growth of just 3.1%.</li>
                    </ul>
                    <h2>What this Means</h2>
                    <ul>
                      <li>Students who work hard to be at the top of their class end up reaching a ‘glass ceiling’ due to this lack of resources.</li>
                      <li>This prevents intelligent and dedicated students from being able to attend some of the top universities or work higher paying jobs.</li>
                      <li>Many families are kept trapped in poverty by this glass ceiling, so it is time that this barrier is shattered.</li>
                    </ul>
                    <h2>Our Solution</h2>
                    <ul>
                      <li>Here at Project Shatter we have created a network specifically for these students that enables them to learn and gain experience in the field of technology while simultaneously earning the income their families rely on.</li>
                      <li>Through their school, students can connect to a network of educational resources and opportunities to participate in real world projects with real companies and nonprofit organizations.</li>
                    </ul>
                    <h2>Why this Works</h2>
                    <ul>
                      <li>Our system allows students to learn more about Computer Science while being paid to work on real world projects.</li>
                      <li>This not only opens up more full-time job opportunities for these students in the future, but it can help create an impressive resume to increase a student’s chances of being accepted into a prestigious university.</li>
                    </ul>

                    <center>
                      <h3><span className="highlight">Click Below to Get Started!</span></h3>
                    </center>
                  </div>
                </div>
              </div>
              <div className="item">
                  <h4>I am a...</h4>
                  <div className="ui buttons">
                    <button className="ui teal button">High School Student</button>
                    <div className="or"></div>
                    <button className="ui teal button">Small Business Owner</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default StudentResources;
