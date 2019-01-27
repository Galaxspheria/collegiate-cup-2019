import React, { Component } from 'react';
import firebase from "../components/Firebase";

class StudentResources extends Component {
  render() {
    return (
        <div className="StudentResources">
          <div className="ui container midz title-header">
            <h1 style={{fontSize: 40}}>Helpful Resources</h1>
            <h3>Here you can find an abundance of resources to help you expand you knowledge and abilities</h3>
          </div>
          <div className="ui white container segment teal homepage midz">
            <div className="ui items homepage-content">
              <div className="item">
                <div className="content">
                  <div className="description">
                    <h1>Helpful Coding Class Websites</h1>
                    <ul>
                      <li><a href="https://www.codecademy.com">Code Academy</a></li>
                      <li><a href="https://www.coursera.org ">Coursera</a></li>
                      <li><a href="https://www.codewars.com/">Code Wars</a></li>
                      <li><a href="https://www.khanacademy.org/">Khan Academy</a></li>
                    </ul>
                    <h2>Excellent Video Tutorials</h2>
                    <ul>
                      <li><a href="https://www.youtube.com/user/CodersGuide">Coders Guide</a></li>
                      <li><a href="https://www.youtube.com/user/thenewboston">The New Boston</a></li>
                    </ul>
                    <h2>Useful Blogs</h2>
                    <ul>
                      <li><a href="https://alistapart.com/">A List Apart</a></li>
                      <li><a href="https://css-tricks.com/">Css Tricks</a></li>
                      <li><a href="https://www.sitepoint.com/">Sitepoint</a></li>
                    </ul>
                    <h2>More Specialized Resources</h2>
                    <ul>
                      <li><a href="https://learn.skillcrush.com/skillcrush-free-bootcamp/">Skillcrush</a></li>
                      <li><a href="http://conqueringthecommandline.com/book">Conquering The Command Line</a></li>
                      <li><a href="http://try.github.io/">Try Github</a></li>
                      <li><a href="https://www.javascript.com/">JavaScript</a></li>
                      <li><a href="http://www.learnpython.org/">LearnPython</a></li>
                      <li><a href="http://www.mysqltutorial.org/">MySQL Tutorial</a></li>
                      <li><a href="https://hackdesign.org/">Hack Academy</a></li>
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
