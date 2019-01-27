import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const data = [
    {
        title: "Alphabetical Word Checker",
        xp: 150,
        icon: "sort alphabet down",
        desc: 'A handful of words have their letters in alphabetical order, that is, nowhere in the word do you change direction if you were to scan along the English alphabet. An example is the word "almost", which has its letters in alphabetical order...',
        link: "/challenges/127"
    }, {
        title: "Circular Array",
        xp: 100,
        icon: "sync alternate"
    }, {
        title: "Sign In Basics",
        xp: 200,
        icon: "sign-in"
    }, {
        title: "Data Visualization: Pie Charts",
        xp: 150,
        icon: "chart pie"
    }, {
        title: "To Do List",
        xp: 100,
        icon: "tasks"
    }, {
        title: "The Knight's Tour",
        xp: 200,
        icon: "chess knight"
    },
    {
        title: "Python Debugging Level 3",
        xp: 150,
        icon: "bug"
    }, {
        title: "Intro to Command Line",
        xp: 100,
        icon: "terminal"
    }, {
        title: "Simple Search",
        xp: 200,
        icon: "search"
    },
]

const DataEntry = (d) => (
    <div>
        <div className="content force-black-text">
        <div className="header">{d.title}</div>
        <div className="meta">
            <span className="price">{d.xp} Potential Experience Points</span>
        </div>
        {d.desc?
            <div className="description ui ">
                {d.desc}
            </div>
        :
            <div className="description ui placeholder">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        }
        <div className="ui divider"></div>
    </div>
    </div>
)

class ChallengeList extends Component {
  render() {
    return (
      <div className="ChallengeList pattern-bg">
        <div className="ui grid container page-height">
            <div className="three wide teal column">
            <div className="ui centered header">
            <h3 className="ui header">Filter Challenges</h3>
            </div>
                <div class="ui search">
                    <div class="ui icon input">
                        <input class="prompt" type="text" placeholder="Search by skill..."></input>
                        <i class="search icon"></i>
                    </div>
                    <div class="results"></div>
                </div>
            </div>
            <div className="thirteen wide white column scroll-list">
                <h2 className="ui header">My Challenges</h2>
                <div className="ui divider"></div>
                <div className="ui items">
                    {data.map((d) => (
                        <div className="item anim-in">
                        <div className="ui challenge-icon">
                            <Icon name={d.icon}/>
                        </div>
                            {d.link? <Link to={d.link}>{DataEntry(d)}</Link> : DataEntry(d)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ChallengeList;
