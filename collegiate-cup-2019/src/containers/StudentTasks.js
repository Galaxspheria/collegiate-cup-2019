import React, { Component } from 'react';

const data = [
  {
      Company: "YeEt DoRiTe",
      Title:"Title",
      Wage: 123,
      Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
      Location: "",
      Category: "Website Design",
      Date: "1/11/19"
      
  },
  {
    Company: "YeEt DoRiTe",
    Title:"Title",
    Wage: 123,
    Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
    Location: "",
    Category: "Website Design",
    Date: "1/11/19"
    
},
{
  Company: "YeEt DoRiTe",
  Title:"Title",
  Wage: 123,
  Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
  Location: "",
  Category: "Website Design",
  Date: "1/11/19"
  
}
]
class StudentTasks extends Component {
  render() {
    return (
      <div className="ChallengeList pattern-bg">
      <div className="ui grid container page-height">
          <div className="four wide teal column">
              <h4 className="ui header">FILTER</h4>
          </div>
            
            <div className="twelve wide white column scroll-list">
            <div className="twelve wide white column">
                <h2 className="ui header">Tasks I'm working on:</h2>
                <div className="ui divider"></div>
                
                
            </div>
                <h2 className="ui header">Open Tasks:</h2>
                <div className="ui divider"></div>
                    <div className="ui three stackable cards centered">
                    {data.map((d) => (
                        <div className="card">
                            <div className="content">
                                <div className="header">{d.Title}</div>
                                <div className="meta">
                                    <span className="price left floated">${d.Wage}</span>
                                    <span className="stay right floated">Posted On: {d.Date} </span>
                                </div>
                                <div className="description ui">
                                <span >{d.Description}</span>
                                </div>

                                <div className = "ui buttons centered">
                                    <div class="ui bottom attached button">
                                        <i class="newspaper outline icon"></i>
                                        View Task
                                    </div>
                                    <div class="ui bottom attached button">
                                        <i class="edit icon"></i>
                                        Edit Task
                                    </div>
                                    
                                </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </div>
    );
  }
}

export default StudentTasks;
