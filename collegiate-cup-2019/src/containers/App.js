import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Semantic/semantic.min.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from './Home';
import Quiz from './Quiz';
import StudentHome from './StudentHome';
import ChallengeList from './ChallengeList';
import StudentProfile from './StudentProfile';
import AptTest from './AptTest';
import StudentTasks from './StudentTasks';
import CompanyList from './CompanyList';
import CompanyProfile from './CompanyProfile';
import CompanyQuiz from './CompanyQuiz';
import CompanyTasks from './CompanyTasks';
import StudentList from './StudentList';
import AddTask from './AddTask';
import CompanyHome from './CompanyHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav class="ui secondary pointing menu">
              <NavLink className="item" activeClassName="item active" to="/" exact>Home</NavLink>
              <NavLink className="item" activeClassName="item active" to="/quiz/">Quiz</NavLink>
              <NavLink className="item" activeClassName="item active" to="/ChallengeList/">ChallengeList</NavLink>
              <NavLink className="item" activeClassName="item active" to="/StudentHome/" exact>StudentHome</NavLink>
              <NavLink className="item" activeClassName="item active" to="/StudentProfile/">StudentProfile</NavLink>
              <NavLink className="item" activeClassName="item active" to="/AptTest/" exact>AptTest</NavLink>
              <NavLink className="item" activeClassName="item active" to="/StudentTasks/">StudentTasks</NavLink>
              <NavLink className="item" activeClassName="item active" to="/CompanyList/">CompanyList</NavLink>
              <NavLink className="item" activeClassName="item active" to="/CompanyProfile/">CompanyProfile</NavLink>
              <NavLink className="item" activeClassName="item active" to="/CompanyQuiz/">CompanyQuiz</NavLink>
              <NavLink className="item" activeClassName="item active" to="/CompanyTasks/">CompanyTasks</NavLink>
              <NavLink className="item" activeClassName="item active" to="/StudentList/" >StudentList</NavLink>
              <NavLink className="item" activeClassName="item active" to="/AddTask/">AddTask</NavLink>
              <NavLink className="item" activeClassName="item active" to="/CompanyHome/">CompanyHome</NavLink>

              <div className="right menu">
                <a className="ui item">
                  Logout
                </a>
              </div>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/quiz/" component={Quiz} />
            <Route path="/ChallengeList/" component={ChallengeList} />
            <Route path="/StudentHome" exact component={StudentHome} />
            <Route path="/StudentProfile/" component={StudentProfile} />
            <Route path="/AptTest/" exact component={AptTest} />
            <Route path="/StudentTasks/" component={StudentTasks} />
            <Route path="/CompanyList/" component={CompanyList} />
            <Route path="/CompanyProfile/" exact component={CompanyProfile} />
            <Route path="/CompanyQuiz/" component={CompanyQuiz} />
            <Route path="/CompanyTasks/" component={CompanyTasks} />
            <Route path="/AddTask/" exact component={AddTask} />
            <Route path="/CompanyHome/" component={CompanyHome} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
