import React, { Component } from 'react';
import firebase from "../components/Firebase";

class OrganizationDashboard extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Companies').doc(this.props.match.params.id);
    this.unsubscribe = null;
    this.state = {}
  }

  componentDidMount() {
    const that = this;
    this.ref.get().then(function (doc) {
      if (doc.exists) {
        that.setState({company: doc.data()})
      } else {
        console.log("No such document!"); // TODO: 404
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  render() {
    return (
      <div className="StudentProfile pattern-bg page-height">
        {this.state.company?
          <div class="ui equal width centered grid container">
              <div className="four wide column">
                <div className="ui image">
                  <img src={this.state.company.Logo}/>
                </div>
              </div>
              <div class="twelve wide column">
                <div class="ui segment">
                <h2>{this.state.company.Name}</h2>
                <div class="ui divider"></div>
                <i className="map pin icon"></i> {this.state.company.Location}
                <br></br>
                <i className="envelope outline icon"></i> {this.state.company.Email}
                <br></br>
                <h4>Bio:</h4> {this.state.company.Description}
                <br></br>
                </div>
              </div>
          </div>

        // {this.state.user.CurrentTasks.length > 0?
        //     <div className="thirteen wide white column scroll-list">
        // <div className="thirteen wide white column">
        //     <h2 className="ui header">Tasks I'm working on:</h2>
        //     <div className="ui divider"></div>
        //     <div className="ui three stackable cards centered">
              
        //         {this.state.user.CurrentTasks.map((d) => (
        //             <div className="ui card">
        //                 <div className="ui content">
        //                     <h4 className="ui header left aligned" style={{display: "inline-block"}}>
        //                         {d.Title}
        //                     </h4>
        //                     <h4 className="ui right floated header" style={{display: "inline-block"}}>
        //                         {d.Company}
        //                     </h4>
        //                     <div className="meta">
        //                         <span className="price left floated">${d.Wage}</span>
        //                         <span className="stay right floated">Posted On: {d.Date} </span>
        //                     </div>
        //                     <div className="description ui">
        //                         <span >{d.Description}</span>
        //                     </div>
        //                 </div>
        //                 <div className="extra content">
        //                     <div className="ui bottom attached button centered">
        //                     <i className="newspaper outline icon"></i>
        //                             View Task
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        //   </div>
        //   :null}
        


        :
          <div className="ui equal width centered grid container">
            <h2>Uh oh! That profile can't be found.</h2>
          </div>
        }
      </div>
    );
  }
}

export default OrganizationDashboard;
