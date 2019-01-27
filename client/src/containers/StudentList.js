import React, { Component } from 'react';
import firebase from "../components/Firebase";
import { Link } from "react-router-dom";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('Users');
        this.unsubscribe = null;
        this.state = {
            users: [],
            filteredUsers: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
            const {
                Email,
                FirstName,
                LastName,
                ExperienceLevel,
                Description,
                Location,
                ProfilePic,
                Skills
            } = doc.data();
            users.push({
                id: doc.id,
                doc, // DocumentSnapshot,
                Email,
                FirstName,
                LastName,
                ExperienceLevel,
                Description,
                Location,
                ProfilePic,
                Skills
            });
        });
        this.setState({
            users,
            filteredUsers: users
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    search() {
        const filter = this.refs.searchtextbox.value;

        const users = [];
        const filteredUsers = [];
            this.state.users.forEach((doc) => {
                // actual filters
                var found = false;
                        for(var i = 0; i < doc.Skills.length; i++) {
                            if((doc.Skills[i]).toLowerCase().includes(filter) && !found) {
                                //console.log(doc.id, " => ", doc.data().Skills[i]);
                                found = true;
                                filteredUsers.push(doc);
                                console.log(doc.Skills[i]);
                            }
                        }
                        if((doc.FirstName).toLowerCase().includes(filter) && !found) {
                            //console.log(doc.id, " => ", doc.data().FirstName);
                            filteredUsers.push(doc);
                            console.log(doc.FirstName);
            
                        } else if((doc.LastName).toLowerCase().includes(filter) && !found) {
                            //console.log(doc.id, " => ", doc.data().LastName);
                            filteredUsers.push(doc);
                            console.log(doc.LastName);
                        }
                        console.log(filteredUsers);
            });
            this.setState({
                filteredUsers
            });
    }

    

    render() {
        return (
            <div className="StudentList pattern-bg page-height">
                <div className="ui center container">
                    <div className="field">
                        <div className="ui search">
                            <div className="ui icon input">
                            <input ref ="searchtextbox"type="text" onChange={() => this.search()} placeholder="Task Title"></input>
                            {/* <button ref="searchsubmitbutton" onClick={() => this.search()}>submit</button> */}
                            <i className="search icon"></i>
                            </div>
                            <div className="results"></div>
                        </div>
                    </div>
                    <div className="ui link four stackable cards">
                        {this.state.filteredUsers.map((s) => (
                            // @TODO: replace the href with the real server link
                            <Link key={s.id} className="fluid card" to={"/profile/student/" + s.id}>
                                <div className="image">
                                    <img src={s.ProfilePic}></img>
                                </div>
                                <div className="content">
                                    <div className="header">{s.FirstName} {s.LastName}</div>
                                    <div className="description">
                                        {s.Description}
                                    </div>
                                </div>
                                <div className="extra content">
                                    <span className="right floated">
                                        <i className="bolt icon"></i>
                                        {s.ExperienceLevel}
                                    </span>
                                    <span>
                                        <i className="map pin icon"></i>
                                        {s.Location}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentList

