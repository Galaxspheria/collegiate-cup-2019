import React, { Component } from 'react';
import firebase from "../components/Firebase";
import { Link } from "react-router-dom";

class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('Companies');
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
                Name,
                Description,
                Logo,
                Location
            } = doc.data();
            users.push({
                id: doc.id,
                doc, // DocumentSnapshot,
                Email,
                Name,
                Logo,
                Description,
                Location
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
        <div className="CompanyList pattern-bg page-height">
            <div className="ui center container">
                <div className="ui link four stackable cards">
                    {this.state.users.map((s) => (
                        // @TODO: replace the href with the real server link
                        <Link key={s.id} className="fluid card" to={"/profile/organization/" + s.id}>
                            <div className="image">
                                <img src={s.Logo}></img>
                            </div>
                            <div className="content">
                                <div className="header">{s.Name}</div>
                                <div className="description">
                                    {s.Description}
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    <i className="envelope icon"></i>
                                    <a href={"mailto:" + s.Email}>Contact Us</a>
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

export default CompanyList;
