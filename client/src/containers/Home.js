import React, { Component } from 'react';
import '../styles/Home.css';
import BGParticles from '../components/BGParticles';

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <div className="ui container midz title-header">
            <h1 style={{fontSize: 40}}>Project Shatter</h1>
            <div className="ui teal inverted segment" style={{display: "inline-block"}}>
              <h3>Breaking down barriers</h3>
            </div>
          </div>
          <div className="ui white container segment teal homepage midz">
            <div className="ui items homepage-content">
              <div className="item">
                <div className="ui small image">
                  <img src="/images/gaOutline.png"/>
                </div>
                <div className="content">
                  <div className="header">A Problem in Need of a Solution</div>
                  <div className="description">
                    <p>Poverty is a major issue throughout the nation, especially in the state of Georgia. 
                    According to the Georgia Partnership for Excellence in Education “approximately <span className="highlight">one 
                    out of four children in Georgia live in a home with an income at or less than the federal 
                    poverty level</span>, and more than 60% of the state’s public school students qualify for free 
                    or reduced-price lunch”. Although the situation across the entire state is dire, it is 
                    those who live in the more rural regions that suffer the most. In regions such as Bibb, 
                    Clarke and Richmond the percentage exceeds 40%.<br/><br/>Furthermore, these regions are falling even 
                    further behind areas such as Atlanta, which sees a 10.4% increase in jobs annually while the more rural 
                    regions see a growth of just 3.1%. With such staggering numbers, it is no surprise that 
                    students in these regions are struggling. Whether it’s the need to work full time after 
                    school, as approximately 30% of rural students do, or a lack of resources, 28.1% of Georgians are without 
                    access to broadband and many schools do not offer an AP Computer Science course, students 
                    living in rural areas are at a significant disadvantage. Despite their best efforts, <span className="highlight">students 
                    end up reaching a ‘glass ceiling’ due to these disadvantages</span>. This prevents intelligent and 
                    dedicated students from being able to attend some of the top universities or work higher paying 
                    jobs. Many families live their whole lives trapped in poverty by this glass ceiling. <span className="highlight">
                    It is time  to shatter this barrier.</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BGParticles/>
        </div>
    );
  }
}

export default Home;
