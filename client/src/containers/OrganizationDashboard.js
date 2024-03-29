import React, { Component } from 'react';
import AddModal from './AddModal';
import firebase from "../components/Firebase";
import FeedbackModal from './FeedbackModal';

// make a pending applications section
class OrganizationDashboard extends Component {
    constructor(props) {
        super(props);
        this.orgRef = firebase.firestore().collection('Companies').doc("Ca871ME92peR91C6X");
        this.taskRef = firebase.firestore().collection('Tasks');
        this.unsubscribe = null;
        this.state = {
            open: [],
            pending: [],
            Ongoing: [],
            completed: [],
            filteredTasks: []
        }
      }
    accept(d) {
        var batch = firebase.firestore().batch();
        var taskRef = firebase.firestore().collection("Tasks").doc(d.id);
        batch.update(taskRef, {AcceptedUser: "Sa871ME92peR91C6X",
        Status: "Ongoing"});
        batch.commit();
    }
    reject(d) {
        var batch = firebase.firestore().batch();
        var userRef = firebase.firestore().collection("Users").doc("Sa871ME92peR91C6X");
        batch.update(userRef, {TaskIDs: firebase.firestore.FieldValue.arrayRemove(d.id)});
        var taskRef = firebase.firestore().collection("Tasks").doc(d.id);
        batch.update(taskRef, {AppliedUsers: firebase.firestore.FieldValue.arrayRemove("Sa871ME92peR91C6X"),
        Status: "Open"});
        batch.commit();
    }
    complete(d) {
        var batch = firebase.firestore().batch();
        var userRef = firebase.firestore().collection("Users").doc("Sa871ME92peR91C6X");
        batch.update(userRef, {TaskIDs: firebase.firestore.FieldValue.arrayRemove(d.id)});
        var taskRef = firebase.firestore().collection("Tasks").doc(d.id);
        batch.update(taskRef, {AppliedUsers: firebase.firestore.FieldValue.arrayRemove("Sa871ME92peR91C6X"),
        Status: "Completed"});
        batch.commit();
    }
    
      componentDidMount() {
        const that = this;
        this.unsubscribe = this.taskRef.onSnapshot(this.onCollectionUpdate);
        this.orgRef.get().then(function (doc) {
          if (doc.exists) {
            that.setState({company: doc.data()})
            that.filterTasks(null, doc.data())
          } else {
            console.log("No such document!"); // TODO: 404
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
      }

      onCollectionUpdate = (querySnapshot) => {
        const allTasks = [];
        querySnapshot.forEach((doc) => {
            const {
                AcceptedUser,
                AppliedUsers,
                Category,
                Description,
                CompanyName,
                DateCreated,
                ServiceHours,
                Skills,
                Status,
                Title,
                Wage
            } = doc.data();
            allTasks.push({
                id: doc.id,
                doc, // DocumentSnapshot,
                AcceptedUser,
                AppliedUsers,
                Category,
                Description,
                CompanyName,
                DateCreated,
                ServiceHours,
                Skills,
                Status,
                Title,
                Wage
            });
        });
        this.setState({
            allTasks,
            filteredTasks: allTasks
        });
        this.filterTasks(allTasks, null)
    }

    filterTasks(t, c) {
        var tasks = t || this.state.allTasks
        var company = c || this.state.company
        if (tasks && company) {
            var task0 = []
            var task1 = []
            var task2 = []
            var task3 = []

            for (var i = 0; i < tasks.length; i++) {
                if (company.TaskIDs.includes(tasks[i].id)) {
                    if (tasks[i].Status === "Open") {
                        task0.push(tasks[i])
                    } else if (tasks[i].Status === "Pending") {
                        task1.push(tasks[i])
                    } else if (tasks[i].Status === "Ongoing") {
                        task2.push(tasks[i])
                    } else if (tasks[i].Status === "Completed") {
                        task3.push(tasks[i])
                    }
                }
                
            }
            this.setState({
                open: task0,
                pending: task1,
                Ongoing: task2,
                completed: task3
            })
        }
    }

    search() {
        const filter = this.refs.filtersearchbar.value.toLowerCase();

        const allTasks = [];
        const filteredTasks = [];
            this.state.allTasks.forEach((doc) => {
                // actual filters
                
                if((doc.Title).toLowerCase().includes(filter)) {
                    //console.log(doc.id, " => ", doc.data().FirstName);
                    filteredTasks.push(doc);
    
                } else if((doc.Status).toLowerCase().includes(filter)) {
                    filteredTasks.push(doc);
                } else {
                    for(var i = 0; i < doc.Skills.length; i++) {
                        if(doc.Skills[i].toLowerCase().includes(filter)) {
                            filteredTasks.push(doc);
                            return;
                        }
                    }
                }
                console.log(filteredTasks);
            });
            this.setState({
                filteredTasks
            });
            this.filterTasks(filteredTasks, null)
    }

  render() {
    return (
        <div className="OrganizationDashboard">
            {this.state.company
            ? 
            <div className="ChallengeList pattern-bg">
                <div className="ui grid container page-height">
                    <div className="three wide teal column">
                        <div className="ui centered header">
                            <h3 className="ui header">Filter Tasks</h3>
                        </div>
                        <div class="ui search">
                            <div class="ui icon input">
                                <input class="prompt" ref="filtersearchbar" type="text" onChange={() => this.search()} placeholder="Search by skill or name..."></input>
                                <i class="search icon"></i>
                            </div>
                            <div class="results"></div>
                        </div>
                    </div>
                    <div className="thirteen wide white column scroll-list">
                    <div className="ui inline container">
                        <h1 className="ui header" style={{display: "inline-block"}}>{this.state.company.Name}</h1>
                        <img className="ui image right floated" src={this.state.company.Logo} style={{display: "inline-block"}} height="50px" width="50px"></img>
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
                                            <input className="prompt" type="text" placeholder="Search skills, ..."></input>
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
                                            <span className="stay right floated">Posted: {d.DateCreated} </span>
                                        </div>
                                        <div className="description ui">
                                        <span >{d.Description}</span>
                                        </div>
                                    </div>
                                    <div className="extra content">
                                        <div className = "ui two buttons">
                                            <div class="ui attached button" onClick={(e) => this.props.history.push("/profile/task/"+d.id)}>
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
                                            <span className="stay right floated">Posted: {d.DateCreated} </span>
                                        </div>
                                        <div className="description ui">
                                        <span >{d.Description}</span>
                                        </div>
                                    </div>
                                    <div className="extra content">
                                        <div className = "ui two buttons">
                                            {/* <div class="ui attached button">
                                                <i class="newspaper outline icon"></i>
                                                View Task
                                            </div> */}
                                            <div class="ui attached green button" onClick={(e) => this.accept(d)}>
                                                <i class="check icon"></i>
                                                Approve
                                            </div>
                                            <div class="ui attached red button" onClick={(e) => this.reject(d)}>
                                                <i class="x icon icon"></i>
                                                Reject
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="ui header">Ongoing Tasks</h2>
                        <div className="ui divider"></div>
                            <div className="ui three stackable cards left">
                            {this.state.Ongoing.map((d) => (
                                <div className="yellow card">
                                    <div className="content">
                                        <div className="header">{d.Title}</div>
                                        <div className="meta">
                                            <span className="price left floated">${d.Wage}</span>
                                            <span className="stay right floated">Posted: {d.DateCreated} </span>
                                        </div>
                                        <div className="description ui">
                                        <span >{d.Description}</span>
                                        </div>
                                    </div>
                                    <div className="extra content">
                                        <div class = "ui two buttons">
                                            <div class="ui attached button" onClick={(e) => this.props.history.push("/profile/task/"+d.id)}>
                                                <i class="newspaper outline icon" ></i>
                                                View Task
                                            </div>
                                            <FeedbackModal complete={() => this.complete(d)}/>
                                            {/* <div class="ui attached green button" onClick={(e) => this.complete(d)}>
                                                <i class="flag icon" ></i>
                                                Complete
                                            </div> */}
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
                                            <span className="stay right floated">Posted: {d.DateCreated} </span>
                                        </div>
                                        <div className="description ui">
                                        <span >{d.Description}</span>
                                        </div>
                                    </div>
                                    <div className="extra content">
                                        <div className = "ui two buttons">
                                            <div class="ui attached button" onClick={(e) => this.props.history.push("/profile/task/"+d.id)}>
                                                <i class="newspaper outline icon"></i>
                                                View Task
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
