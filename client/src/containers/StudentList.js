import React, { Component } from 'react';
import firebase from "../components/Firebase";
import { Link } from "react-router-dom";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('Users');
        this.unsubscribe = null;
        this.state = {
            users: []
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
                Location
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
                ProfilePic: "/images/image.png"
            });
        });
        this.setState({
            users
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div className="StudentList pattern-bg page-height">
                <div className="ui center container">
                    <div className="ui link cards">
                        {this.state.users.map((s) => (
                            // @TODO: replace the href with the real server link
                            <Link key={s.id} className="card" to={"/StudentProfile/" + s.id}>
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

