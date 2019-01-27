import React, { Component } from 'react';
import firebase from "../components/Firebase";

// const currentProjects = [
//   {
//       Company: "Company Name",
//       Title:"Title",
//       Wage: 123,
//       Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//       Location: "",
//       Category: "Website Design",
//       Date: "1/11/19",
//       Status: 2
      
//   },
//   {
//     Company: "Company Name",
//     Title:"Title",
//     Wage: 123,
//     Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//     Location: "",
//     Category: "Website Design",
//     Date: "1/11/19",
//     Status: 2
    
// },
// {
//   Company: "Company Name",
//   Title:"Title",
//   Wage: 123,
//   Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//   Location: "",
//   Category: "Website Design",
//   Date: "1/11/19",
//   Status: 2
  
// }
// ]

// const PendingProjects = [
//     {
//         Company: "Company Name",
//         Title:"Title",
//         Wage: 123,
//         Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//         Location: "",
//         Category: "Website Design",
//         Date: "1/11/19",
//         Status: 1
        
//     },
//     {
//       Company: "Company Name",
//       Title:"Title",
//       Wage: 123,
//       Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//       Location: "",
//       Category: "Website Design",
//       Date: "1/11/19",
//       Status: 1
      
//   },
//   {
//     Company: "Company Name",
//     Title:"Title",
//     Wage: 123,
//     Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//     Location: "",
//     Category: "Website Design",
//     Date: "1/11/19",
//     Status: 1
    
//   }
//   ]
// const PossibleProjects = [
//     {
//         Company: "Company Name",
//         Title:"Title",
//         Wage: 123,
//         Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//         Location: "",
//         Category: "Website Design",
//         Date: "1/11/19",
//         Status: 0
        
//     },
//     {
//       Company: "Company Name",
//       Title:"Title",
//       Wage: 123,
//       Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//       Location: "",
//       Category: "Website Design",
//       Date: "1/11/19",
//       Status: 0
      
//   },
//   {
//     Company: "Company Name",
//     Title:"Title",
//     Wage: 123,
//     Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//     Location: "",
//     Category: "Website Design",
//     Date: "1/11/19"
    
//   },
//   {
//     Company: "Company Name",
//     Title:"Title",
//     Wage: 123,
//     Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//     Location: "",
//     Category: "Website Design",
//     Date: "1/11/19"
    
//   },
//   {
//     Company: "Company Name",
//     Title:"Title",
//     Wage: 123,
//     Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//     Location: "",
//     Category: "Website Design",
//     Date: "1/11/19"
    
// },
// {
//   Company: "Company Name",
//   Title:"Title",
//   Wage: 123,
//   Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
//   Location: "",
//   Category: "Website Design",
//   Date: "1/11/19"
  
// },
// {
// Company: "Company Name",
// Title:"Title",
// Wage: 123,
// Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
// Location: "",
// Category: "Website Design",
// Date: "1/11/19"

// },
// {
// Company: "Company Name",
// Title:"Title",
// Wage: 123,
// Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
// Location: "",
// Category: "Website Design",
// Date: "1/11/19"

// }
//   ]
class StudentTasks extends Component {
    constructor(props) {
        super(props);
        this.stuRef = firebase.firestore().collection('Users').doc("Sa871ME92peR91C6X"); 
        this.taskRef = firebase.firestore().collection('Tasks');
        this.unsubscribe = null;
        this.state = {
            open: [],
            pending: [],
            in_progress: [],
            completed: []
        };
    }
    
    onCollectionUpdate = (querySnapshot) => {
        var student;
        const that = this;
        this.stuRef.get().then(function (doc) {
            if (doc.exists) {
                that.setState({
                    student: doc.data()
                })
                return doc.data()
            } else {
              console.log("No such document!"); // TODO: 404
              return null
            }
          })
        .then((student) => {
            const tasks = [];
            querySnapshot.forEach((doc) => {
                const {
                    AcceptedUser,
                    Category,
                    CompanyName,
                    DateCreated,
                    Description,
                    ServiceHours,
                    Skills,
                    Status,
                    Title,
                    Wage,
                    AppliedUsers,
                    TaskIDs
                } = doc.data();
                tasks.push({
                    id: doc.id,
                    TaskIDs,
                    AcceptedUser,
                    Category,
                    CompanyName,
                    DateCreated,
                    Description,
                    ServiceHours,
                    Skills,
                    Status,
                    Title,
                    Wage,
                    AppliedUsers
                });
            });
            that.setState({
                tasks
            });
            return((tasks, student))
        })
        .then((res) => {
            that.filterTasks(res[0], res[1])
        })
        .catch(function (error) {
            console.log("Error getting document:", error);
        })
      
    }
    
    componentDidMount() {
        const that = this;
        this.unsubscribe = this.taskRef.onSnapshot(this.onCollectionUpdate);
        this.stuRef.get().then(function (doc) {
            if (doc.exists) {
                that.setState({student: doc.data()})
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
        var tasks = t || this.state.tasks
        var student = c || this.state.student
        if (tasks && student) {
            var openProjects = []
            var appliedProjects = []
            var onProjects = []
            for (var i = 0; i < tasks.length; i++) {
                if (student.TaskIDs.includes(tasks[i].id)) {
                    if (tasks[i].AcceptedUser === "Sa871ME92peR91C6X") {
                        onProjects.push(tasks[i])
                    } else if (tasks[i].AppliedUsers.includes("Sa871ME92peR91C6X")) {
                        appliedProjects.push(tasks[i])
                    } 
                } else if (tasks[i].Status === "Open" || tasks[i].Status === "Pending") {
                    openProjects.push(tasks[i])
                }
                
            }
            this.setState({
                open: openProjects,
                pending: appliedProjects,
                in_progress: onProjects,
            })
        }
    }

    apply(d) {
        this.setState({
            student: {
                TaskIDs: this.state.student.TaskIDs + [d.id],
                ...this.state.student
            }
        })
        var batch = firebase.firestore().batch();
        var userRef = firebase.firestore().collection("Users").doc("Sa871ME92peR91C6X");
        batch.update(userRef, {TaskIDs: firebase.firestore.FieldValue.arrayUnion(d.id)});
        var taskRef = firebase.firestore().collection("Tasks").doc(d.id);
        batch.update(taskRef, {AppliedUsers: firebase.firestore.FieldValue.arrayUnion("Sa871ME92peR91C6X"),
        Status: "Pending"});
        batch.commit();
        

        // firebase.firestore().collection("Users").doc("Sa871ME92peR91C6X").update({
        //     TaskIDs: firebase.firestore.FieldValue.arrayUnion(d.id)
        // })
        // firebase.firestore().collection("Tasks").doc(d.id).update({
        //     AppliedUsers: firebase.firestore.FieldValue.arrayUnion("Sa871ME92peR91C6X"),
        //     Status: "Pending"
            
        // })
    }

    cancelapp(d) {
        var batch = firebase.firestore().batch();
        var userRef = firebase.firestore().collection("Users").doc("Sa871ME92peR91C6X");
        batch.update(userRef, {TaskIDs: firebase.firestore.FieldValue.arrayRemove(d.id)});
        var taskRef = firebase.firestore().collection("Tasks").doc(d.id);
        batch.update(taskRef, {AppliedUsers: firebase.firestore.FieldValue.arrayRemove("Sa871ME92peR91C6X"),
        Status: "Open"});
        batch.commit();

        // firebase.firestore().collection("Tasks").doc(d.id).update({
        //     AppliedUsers: firebase.firestore.FieldValue.arrayRemove("Sa871ME92peR91C6X"),
        //     Status: "Pending"
        // })
        // firebase.firestore().collection("Users").doc("Sa871ME92peR91C6X").update({
        //     TaskIDs: firebase.firestore.FieldValue.arrayRemove(d.id)
        // })
        
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
            <div className="thirteen wide white column">
                {this.state.student
                    ? 
                    <div className="ui inline container">
                        <h1 className="ui header" style={{display: "inline-block"}}>{this.state.student.FirstName + " " + this.state.student.LastName}</h1>
                        <img className="ui image right floated" src={this.state.student.ProfilePic} style={{display: "inline-block"}} height="50px" width="50px"></img>
                        <p className="right floated">
                            <i className="bolt icon"></i>
                            {this.state.student.PowerLevel}
                        </p>
                    </div>
                    :
                    <div className="ui equal width centered grid container">
                        <h2>Uh oh! That profile can't be found.</h2>
                    </div>
                }
                <h2 className="ui header">Tasks I'm working on:</h2>
                <div className="ui divider"></div>
                <div className="ui three stackable cards centered">
                    {this.state.in_progress.map((d) => (
                        <div className="ui yellow card">
                            <div className="ui content">
                                <h4 className="ui header left aligned" style={{display: "inline-block"}}>
                                    {d.Title}
                                </h4>
                                <h4 className="ui right floated header" style={{display: "inline-block"}}>
                                    {d.CompanyName}
                                </h4>
                                <div className="meta">
                                    <span className="price left floated">${d.Wage}</span>
                                    <span className="stay right floated">Posted On: {d.DateCreated} </span>
                                </div>
                                <div className="description ui">
                                    <span >{d.Description}</span>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui bottom attached button centered" onClick={(e) => this.props.history.push("/profile/"+d.id)}>
                                    <i className="newspaper outline icon"></i>
                                    View Task
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <h2 className="ui header">Pending Applications:</h2>
            <div className="ui divider"></div>
                <div className="ui three stackable cards centered">
                    {this.state.pending.map((d) => (
                        <div className="ui blue card">
                            <div className="ui content">
                                <h4 className="ui header left aligned" style={{display: "inline-block"}}>
                                    {d.Title}
                                </h4>
                                <h4 className="ui right floated header" style={{display: "inline-block"}}>
                                    {d.CompanyName}
                                </h4>
                                <div className="meta">
                                    <span className="price left floated">${d.Wage}</span>
                                    <span className="stay right floated">Posted On: {d.DateCreated} </span>
                                </div>
                                <div className="description ui">
                                    <span >{d.Description}</span>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui buttons bottom attached">
                                    <div className="ui left attached button" onClick={(e) => this.props.history.push("/profile/task/"+d.id)}>
                                    <i className="newspaper outline icon"></i>
                                            View Task
                                    </div>
                                    <div className="ui right attached button red" onClick={(e) => this.cancelapp(d)}>
                                    <i className="ban icon"></i>
                                            Cancel App
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="ui header">Open Tasks:</h2>
                <div className="ui divider"></div>
                <div className="ui relaxed divided items">
                    {this.state.open.map((d) => (
                        <div className="ui item">
                            <div className="ui content">
                                    <h3 className="ui header" style={{display: "inline-block"}}>
                                        {d.Title}
                                    </h3>
                                    <h3 className="ui right floated header" style={{display: "inline-block"}}>
                                        Task by: {d.CompanyName}
                                    </h3>
                                <div className="meta">
                                    <span className="price">${d.Wage}</span>
                                    <span className="date right floated">Posted On: {d.DateCreated} </span>
                                </div>

                                <div className="description ui">
                                {d.Description}
                                </div>
                                <div class="ui vertical labeled icon buttons right floated">
                                    <div class="ui button" onClick={(e) => this.props.history.push("/profile/task/"+d.id)}>
                                        <i class="newspaper icon"></i>
                                        View
                                    </div>
                                    <div class="ui green button" onClick={(e) => this.apply(d)}>
                                        <i class="paper plane icon"></i>
                                        Apply
                                    </div>
                                </div>
                                <h4>Skills:</h4> {d.Skills.map((item) =>
                                    <div class="ui label yellow">{item}</div>
                                )}


                                
                                
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </div>
    );
  }
}

export default StudentTasks;
