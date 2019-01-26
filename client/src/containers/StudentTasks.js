import React, { Component } from 'react';

const currentProjects = [
  {
      Company: "Company Name",
      Title:"Title",
      Wage: 123,
      Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
      Location: "",
      Category: "Website Design",
      Date: "1/11/19"
      
  },
  {
    Company: "Company Name",
    Title:"Title",
    Wage: 123,
    Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
    Location: "",
    Category: "Website Design",
    Date: "1/11/19"
    
},
{
  Company: "Company Name",
  Title:"Title",
  Wage: 123,
  Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
  Location: "",
  Category: "Website Design",
  Date: "1/11/19"
  
}
]

const PossibleProjects = [
    {
        Company: "Company Name",
        Title:"Title",
        Wage: 123,
        Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
        Location: "",
        Category: "Website Design",
        Date: "1/11/19"
        
    },
    {
      Company: "Company Name",
      Title:"Title",
      Wage: 123,
      Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
      Location: "",
      Category: "Website Design",
      Date: "1/11/19"
      
  },
  {
    Company: "Company Name",
    Title:"Title",
    Wage: 123,
    Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
    Location: "",
    Category: "Website Design",
    Date: "1/11/19"
    
  },
  {
    Company: "Company Name",
    Title:"Title",
    Wage: 123,
    Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
    Location: "",
    Category: "Website Design",
    Date: "1/11/19"
    
  },
  {
    Company: "Company Name",
    Title:"Title",
    Wage: 123,
    Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
    Location: "",
    Category: "Website Design",
    Date: "1/11/19"
    
},
{
  Company: "Company Name",
  Title:"Title",
  Wage: 123,
  Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
  Location: "",
  Category: "Website Design",
  Date: "1/11/19"
  
},
{
Company: "Company Name",
Title:"Title",
Wage: 123,
Description: "This is an amazing description to describe the description of the task that the company wishes to be done completely, well and better than ever before",
Location: "",
Category: "Website Design",
Date: "1/11/19"

},
{
Company: "Company Name",
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
          <div className="three wide teal column">
              <h4 className="ui header">FILTER</h4>
          </div>
            
            <div className="thirteen wide white column scroll-list">
            <div className="thirteen wide white column">
                <h2 className="ui header">Tasks I'm working on:</h2>
                <div className="ui divider"></div>
                <div className="ui three stackable cards centered">
                    {currentProjects.map((d) => (
                        <div className="ui card">
                            <div className="ui content">
                                <h4 className="ui header left aligned" style={{display: "inline-block"}}>
                                    {d.Title}
                                </h4>
                                <h4 className="ui right floated header" style={{display: "inline-block"}}>
                                    {d.Company}
                                </h4>
                                <div className="meta">
                                    <span className="price left floated">${d.Wage}</span>
                                    <span className="stay right floated">Posted On: {d.Date} </span>
                                </div>
                                <div className="description ui">
                                    <span >{d.Description}</span>
                                </div>
                            </div>
                            <div className="extra content">
                                <div class="ui bottom attached button centered">
                                <i class="newspaper outline icon"></i>
                                        View Task
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <h2 className="ui header">Pending Applications:</h2>
                <div className="ui divider"></div>

                <h2 className="ui header">Open Tasks:</h2>
                <div className="ui divider"></div>
                <div className="ui relaxed divided items">
                    {PossibleProjects.map((d) => (
                        <div className="ui item">
                            <div className="ui content">
                                    <h3 className="ui header" style={{display: "inline-block"}}>
                                        {d.Title}
                                    </h3>
                                    <h3 className="ui right floated header" style={{display: "inline-block"}}>
                                        Task by: {d.Company}
                                    </h3>
                                <div className="meta">
                                    <span className="price">${d.Wage}</span>
                                    <span className="date right floated">Posted On: {d.Date} </span>
                                </div>
                                
                                <div class="ui vertical labeled icon buttons right floated">
                                    <div class="ui button">
                                        <i class="newspaper icon"></i>
                                        View
                                    </div>
                                    <div class="ui button">
                                        <i class="paper plane icon"></i>
                                        Apply
                                    </div>
                                </div>
                                <div className="description ui">
                                {d.Description}
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
