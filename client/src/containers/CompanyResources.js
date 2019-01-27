import React, { Component } from 'react';

class CompanyResources extends Component {
  render() {
    return (
        <div className="CompanyResources">
          <div className="ui container midz title-header">
            <h1 style={{fontSize: 40}}>Helpful Resources</h1>
            <h3>Here you can find an abundance of resources to help you expand you knowledge and abilities</h3>
          </div>
          <div className="ui white container segment teal">
              <div className="item">
                <h1>Grant Resources</h1>
                <ul>
                    <li>
                    <p><strong>General Operating Support</strong> - “Grants range from $10,000 to $75,000 for each 12-month period, and may be awarded for 12 or 24 months. Each grantee will be asked to identify annual goals and to report on progress and challenges every 12 months.”</p>
                    </li>
                    <li>
                    <p><strong>State Farm Education Assist Fund</strong> - Prioritization based on “work with underserved populations, disadvantaged children, youth, adults and families or those without adequate resources and opportunities”</p>
                    </li>
                    <li>
                    <p><strong>Leona Gruber Trust Grants</strong> - “distributes 15 grants per year with an average size of $2,000. Preference is given to organizations with a focus on youth, health care, community, and education.”</p>
                    </li>
                    </ul>
              </div>
              <div className="item">
                <h1>Tax Deductions</h1>
                    <ul><i>Coming soon!</i></ul>
              </div>
          </div>
        </div>
    );
  }
}

export default CompanyResources;
