import React, { Component } from 'react';
import AddModal from './AddModal';
import firebase from "../components/Firebase";

// Make sure to only pull data from the database that matches this company
// const data = [
//     {
//         Company: "YeEt DoRiTe",
//         id: 0,
//         icon: "/images/image.png",
//         tasks0: [
//             {
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             }
//         ],
//         tasks1: [
//             {
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             }
//         ],
//         tasks2: [
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             }
//         ],
//         tasks3: [
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             },
//             {
//                 Company: "YeEt DoRiTe",
//                 Title:"yeet the yote",
//                 Wage: 123,
//                 Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//                 Location: "",
//                 Category: "Website Design",
//                 Date: "1/11/19"
//             }
//         ]
//     }
// ]

// const companyName = [
//     {Company: "YeEt DoRiTe"}
// ]

// make a pending applications section
class OrganizationDashboard extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('Companies').doc("XZygot9u4OrHMDUemhtA");
        this.unsubscribe = null;
        this.state = {}
      }
    
      componentDidMount() {
        const that = this;
        this.ref.get().then(function (doc) {
          if (doc.exists) {
            
            var dataIn = firebase.firestore().collection('Companies').doc("XZygot9u4OrHMDUemhtA").collection("Tasks")
            var task0, task1, task2, task3
            dataIn = {Task: doc.data().collection()}
            console.log(dataIn)
            for (var i = 0; i < dataIn.Task.length; i++) {
                console.log("YET")
                if (dataIn.Tasks[i].Status == "open") {
                    task0.concat(dataIn.Tasks[i])
                    console.log("here")
                } else if (dataIn.Tasks[i].Status == "pending") {
                    task1.concat(dataIn.Tasks[i])
                } else if (dataIn.Tasks[i].Status == "in_progress") {
                    task2.concat(dataIn.Tasks[i])
                } else if (dataIn.Tasks[i].Status == "completed") {
                    task3.concat(dataIn.Tasks[i])
                }
            }
 
            that.setState({company: doc.data(), open: task0, pending: task1, in_progress: task2, completed: task3 })
            console.log(that.state)
          } else {
            console.log("No such document!"); // TODO: 404
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
      }

  render() {
    return (
        <div className="OrganizationDashboard">
            {this.state.company
            ? 
            <div className="ChallengeList pattern-bg">
                <div className="ui grid container page-height">
                    <div className="three wide teal column">
                        <h4 className="ui header">Company Profile Navbar</h4>
                        <div className="ui container">
                            Add search features
                        </div>
                    </div>
                    <div className="thirteen wide white column scroll-list">
                    <div className="ui inline container">
                        <h1 className="ui header" style={{display: "inline-block"}}>{this.state.company.Name}</h1>
                        <img className="ui image right floated" src={this.state.company.icon} style={{display: "inline-block"}} height="50px" width="50px"></img>
                    </div>
                        <div className="ui placeholder segment">
                            <div className="ui two column stackable center aligned grid">
                                <div className="ui vertical divider">Or</div>
                                <div className="middle aligned row">
                                    <div className="column">
                                        <div className="ui icon header">
                                        <i className="file outline icon"></i>
                                        Add New Task
                                        </div>
                                        <AddModal history={this.props.history}/>
                                    </div>
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
                                </div>
                            </div>
                        </div>
                        <h2 className="ui header">Open Tasks</h2>
                        <div className="ui divider"></div>
                            <div className="ui three stackable cards left">
                            {this.state.open.map((d) => (
                                <div className="red card">
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
                        <h2 className="ui header">Pending Applications for Tasks</h2>
                        <div className="ui divider"></div>
                            <div className="ui three stackable cards left">
                            {this.state.pending.map((d) => (
                                <div className="blue card">
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
                        <h2 className="ui header">Ongoing Tasks</h2>
                        <div className="ui divider"></div>
                            <div className="ui three stackable cards left">
                            {this.state.in_progress.map((d) => (
                                <div className="yellow card">
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
                        <h2 className="ui header">Completed Tasks</h2>
                        <div className="ui divider"></div>
                            <div className="ui three stackable cards left">
                            {this.state.completed.map((d) => (
                                <div className="green card">
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
        
        :
        <div className="ui equal width centered grid container">
            <h2>Uh oh! That profile can't be found.</h2>
          </div>
        }
        </div>
    );
  }
}

export default OrganizationDashboard;
