import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Semantic/semantic.min.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from './Home';
import Quiz from './Quiz';
import ChallengeList from './ChallengeList';
import StudentProfile from './StudentProfile';
import StudentTasks from './StudentTasks';
import CompanyList from './CompanyList';
import OrganizationDashboard from './OrganizationDashboard';
import OrganizationProfile from './OrganizationProfile';
import StudentList from './StudentList';
import Login from './Login';
import WriteReport from './WriteReport';
import TaskProfile from './TaskProfile';
import StudentResources from './StudentResources';

import {UserContext} from './UserContext';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: 'Sa871ME92peR91C6X',
      updateUserID: (id) => this.updateUserID(id)
    }
  }

  updateUserID(id) {
    this.setState({userID: id})
  }

  static contextType = UserContext;

  render() {
    return (
      <div className="App">
        <UserContext.Provider value={this.state}>
          <Router>
            <div>
              <nav class="ui secondary pointing menu teal inverted" style={{position: "relative", zIndex: 10}}>
                <NavLink className="item" activeClassName="item active" to="/" exact>Home</NavLink>
                <NavLink className="item" activeClassName="item active" to="/challenges/" exact> Challenges</NavLink>
                <NavLink className="item" activeClassName="item active" to="/dashboard/student/">Student Dashbo</NavLink>
                <NavLink className="item" activeClassName="item active" to="/profile/organization/" exact>Org list</NavLink>
                <NavLink className="item" activeClassName="item active" to="/dashboard/organization/">Organization Dashbo</NavLink>
                <NavLink className="item" activeClassName="item active" to="/profile/student/" >Student List</NavLink>
                <NavLink className="item" activeClassName="item active" to="/login/">Login</NavLink>
                <NavLink className="item" activeClassName="item active" to="/WriteReport/">WriteReport</NavLink>
                <NavLink className="item" activeClassName="item active" to="/resources/">StudentResources</NavLink>

                <div className="right menu">
                  <a className="ui item">
                    Logout
                  </a>
                </div>
              </nav>

              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/challenges/" exact component={ChallengeList} />
              <Route path="/challenges/:id" component={Quiz} />
              <Route path="/profile/student/" exact component={StudentList} />
              <Route path="/profile/student/:id" component={StudentProfile} />
              <Route path="/dashboard/student/" component={StudentTasks} />
              <Route path="/profile/organization/" exact component={CompanyList} />
              <Route path="/profile/organization/:id" component={OrganizationProfile} />
              <Route path="/dashboard/organization/" component={OrganizationDashboard}/>
              <Route path="/login/" component={Login} />
              <Route path="/WriteReport/" component={WriteReport} />
              <Route path="/profile/task/:id" component={TaskProfile} />
              <Route path="/resources/" component={StudentResources} />

            </div>
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
