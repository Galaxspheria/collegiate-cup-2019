import React, { Component } from 'react';

const students = [
  {
      FirstName: "George",
      LastName: "Burdell",
      Email: "georgepburdell@gatech.edu",
      XPLevel: 1,
      ProfilePic: "/images/image.png", 
      id: 0
  },
  {
    FirstName: "Werk",
    LastName: "Better",
    Email: "work.better@ccup.com",
    XPLevel: 5,
    ProfilePic: "/images/image.png", 
    id: 1, 
    description: "I luv winning",
    location: "Atlanta"
  },
  {
    FirstName: "Garage",
    LastName: "techsquare",
    Email: "techsquare@gmail.com",
    XPLevel: 2,
    ProfilePic: "/images/image.png", 
    id: 2
  }
]

class StudentList extends Component {
  render() {
    return (
        <div className="StudentList">
            <div className="ui center container">
                <div className="ui link cards">
                    {students.map((s) => (
                        // @TODO: replace the href with the real server link
                        <a className="card" href={"http://localhost:3000/StudentProfile/" + s.id}>
                            <div className="image">
                                <img src={s.ProfilePic}></img>
                            </div>
                            <div className="content">
                                <div className="header">{s.FirstName} {s.LastName}</div>
                                <div className="description">
                                    {s.description}
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    <i className="bolt icon"></i>
                                    {s.XPLevel}
                                </span>
                                <span>
                                    <i className="map icon"></i>
                                    {s.location}
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

export default StudentList;

