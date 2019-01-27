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
            filteredUsers: [],
            filters: []
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
                ProfilePic
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
                ProfilePic
            });
        });
        this.setState({
            users
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    search() {
        const filters = this.refs.searchtextbox.value.split(" ");

        const users = [];
        const filteredUsers = [];
        for(var x = 0; x < filters.length; x++){
            this.state.users.forEach((doc) => {
                // actual filters
                var found = false;
                        for(var i = 0; i < doc.Skills.length; i++) {
                            if((doc.Skills[i]).toLowerCase().includes(filters[x]) && !found) {
                                //console.log(doc.id, " => ", doc.data().Skills[i]);
                                found = true;
                                filteredUsers.push(doc);
                            }
                        }
                        if((doc.FirstName).toLowerCase().includes(filters[x]) && !found) {
                            //console.log(doc.id, " => ", doc.data().FirstName);
                            filteredUsers.push(doc);
            
                        } else if((doc.LastName).toLowerCase().includes(filters[x]) && !found) {
                            //console.log(doc.id, " => ", doc.data().LastName);
                            filteredUsers.push(doc);
                        }
            });
            this.setState({
                filteredUsers
            });
        }
    }

    

    render() {
        return (
            <div className="StudentList pattern-bg page-height">
                <div className="ui center container">
                    <div className="field">
                        <div className="ui search">
                            <div className="ui icon input">
                            <input ref ="searchtextbox"type="text" placeholder="Task Title"></input>
                            <button ref="searchsubmitbutton" onClick={() => this.search()}>submit</button>
                            {/* <i className="search icon"></i> */}
                            </div>
                            <div className="results"></div>
                        </div>
                    </div>
                    <div className="ui link four stackable cards">
                        {this.state.users.map((s) => (
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

