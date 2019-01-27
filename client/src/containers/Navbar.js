import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {UserContext} from './UserContext';

class Navbar extends Component {
    // TODO: fetch user icon w/ context
    static contextType = UserContext;
  render() {
    const uType = this.context.userID === "Sa871ME92peR91C6X" ? "student/" : "organization/"
    return (
        <div className="Navbar" style={{marginBottom: "12px"}}>
          <nav class="ui secondary pointing teal menu" style={{position: "relative", zIndex: 10}}>
                <NavLink className="item teal-div-b right-div-b" activeClassName="item active teal-div-b-active" to={"/dashboard/" + uType }>Dashboard</NavLink>
                {uType === "student/" ?
                    <NavLink className="item" activeClassName="item active" to="/challenges/" exact>Challenges</NavLink>
                :
                    <NavLink className="item right-div-b" activeClassName="item active" to="/WriteReport/">Reports</NavLink>
                }
                {uType === "student/" ?
                    <NavLink className="item right-div-b" activeClassName="item active" to="/resources/">Resources</NavLink>
                :null}
                <NavLink className="item" activeClassName="item active" to="/profile/organization/" exact>Organizations</NavLink>
                <NavLink className="item" activeClassName="item active" to="/profile/student/" exact >Students</NavLink>

                <div className="right menu">
                    <NavLink className="item" activeClassName="item active" to="/" exact>Logout</NavLink>
                </div>
              </nav>
        </div>
    );
  }
}

export default Navbar;
