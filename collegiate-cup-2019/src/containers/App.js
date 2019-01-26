import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Semantic/semantic.min.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from './Home';
import Quiz from './Quiz';
import ChallengeList from './ChallengeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav class="ui secondary pointing menu">
              <NavLink className="item" activeClassName="item active" to="/" exact>Home</NavLink>
              <NavLink className="item" activeClassName="item active" to="/quiz/">Quiz</NavLink>
              <NavLink className="item" activeClassName="item active" to="/challenges/">Challenges</NavLink>

              <div className="right menu">
                <a className="ui item">
                  Logout
                </a>
              </div>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/quiz/" component={Quiz} />
            <Route path="/challenges/" component={ChallengeList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
