import React, { Component } from 'react';

// Make sure to only pull data from the database that matches this company
const data = [
    {
        Company: "YeEt DoRiTe",
        Title:"yeet the yote",
        Wage: 123,
        Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
        Location: "",
        Category: "Website Design",
        Date: "1/11/19"
    },
    {
        Company: "YeEt DoRiTe",
        Title:"yeet the yote",
        Wage: 123,
        Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
        Location: "",
        Category: "Website Design",
        Date: "1/11/19"
    },
    {
        Company: "YeEt DoRiTe",
        Title:"yeet the yote",
        Wage: 123,
        Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
        Location: "",
        Category: "Website Design",
        Date: "1/11/19"
    }
]
// make a pending applications section
class CompanyProfile extends Component {
  render() {
    return (
        <div className="CompanyProfile">
            <div className="ChallengeList pattern-bg">
                <div className="ui grid container page-height">
                    <div className="three wide teal column">
                        <h4 className="ui header">Company Profile Navbar</h4>
                    </div>
                    <div className="thirteen wide white column scroll-list">
                        <div className="ui placeholder segment">
                            <div className="ui three column stackable center aligned grid">
                                <div className="ui vertical divider">Or</div>
                                    <div className="middle aligned row">
                                        <div className="column">
                                            <div className="ui icon header">
                                            <i className="search icon"></i>
                                            Find Students
                                            </div>
                                            <div className="field">
                                            <div className="ui search">
                                                <div className="ui icon input">
                                                <input className="prompt" type="text" placeholder="Search names, skills, ..."></input>
                                                <i className="search icon"></i>
                                                </div>
                                                <div className="results"></div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="ui icon header">
                                            <i className="file outline icon"></i>
                                            Add New Task
                                            </div>
                                            <div className="ui primary button">
                                            Create
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="ui icon header">
                                            <i className="file outline icon"></i>
                                            Add New Task
                                            </div>
                                            <div className="ui primary button">
                                            Create
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="ui header">Current Tasks</h2>
                        <div className="ui divider"></div>
                            <div className="ui three stackable cards centered">
                            {data.map((d) => (
                                <div className="card">
                                    <div className="content">
                                        <div className="header">{d.Title}</div>
                                        <div className="meta">
                                            <span className="price left floated">${d.Wage}</span>
                                            <span className="stay right floated">Posted On: {d.Date} </span>
                                        </div>
                                        <div className="description ui">
                                        <span >{d.Description}</span>
                                        </div>
                                    </div>
                                    <div className="extra content">
                                            <div className = "ui two buttons">
                                                <div class="ui attached button">
                                                    <i class="newspaper outline icon"></i>
                                                    View Task
                                                </div>
                                                <div class="ui attached button">
                                                    <i class="edit icon"></i>
                                                    Edit Task
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default CompanyProfile;
