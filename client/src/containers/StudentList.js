import React, { Component } from 'react';
import firebase from "../components/Firebase";

const students = [
  {
      FirstName: "George",
      LastName: "Burdell",
      Email: "georgepburdell@gatech.edu",
      ExperienceLevel: 1,
      ProfilePic: "/images/image.png", 
      id: 0
  },
  {
    FirstName: "Werk",
    LastName: "Better",
    Email: "work.better@ccup.com",
    ExperienceLevel: 5,
    ProfilePic: "/images/image.png", 
    id: 1, 
    description: "I luv winning",
    location: "Atlanta"
  },
  {
    FirstName: "Garage",
    LastName: "techsquare",
    Email: "techsquare@gmail.com",
    ExperienceLevel: 2,
    ProfilePic: "/images/image.png", 
    id: 2
  }
]

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
            <div className="StudentList">
                <div className="ui center container">
                    <div className="ui link cards">
                        {this.state.users.map((s) => (
                            // @TODO: replace the href with the real server link
                            <a key={s.id} className="card" href={"http://localhost:3000/StudentProfile/" + s.id}>
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
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentList