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
                AppliedUsers
            } = doc.data();
            tasks.push({
                id: doc.id,
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
        this.setState({
            tasks
        });
        this.filterTasks(tasks, null)
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
    
    filterTasks(t, c) {
        var tasks = t || this.state.tasks
        var student = c || this.state.student
        if (tasks && student) {
            var openProjects = []
            var appliedProjects = []
            var onProjects = []
            for (var i = 0; i < tasks.length; i++) {
                console.log(student.TaskIDs, tasks[i])
                if (student.TaskIDs.includes(tasks[i].id)) {
                    console.log("hehe")
                    if (tasks[i].AcceptedUser === "Sa871ME92peR91C6X") {
                        onProjects.push(tasks[i])
                    } else if (tasks[i].AppliedUsers.includes("Sa871ME92peR91C6X")) {
                        console.log("mega yee")
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


  render() {
    return (
      <div className="ChallengeList pattern-bg">
      <div className="ui grid container page-height">
          <div className="three wide teal column">
              <h4 className="ui header">FILTER</h4>
          </div>
            
            <div className="thirteen wide white column scroll-list">
            <div className="thirteen wide white column">
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
                                    <div className="ui right attached button red">
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
                                <div className="description ui">
                                {d.Description}
                                </div>
                                
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
