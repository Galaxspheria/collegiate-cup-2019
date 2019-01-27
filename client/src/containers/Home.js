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
                    <h2>A Few Shocking Statistics</h2>
                    <ul>
                      <li>25% of children in Georgia live in a home with an income at or less than the federal poverty level.</li>
                      <li>28.1% of Georgians live without access to broadband.</li>
                      <li>Atlanta experienced a 10.4% increase in jobs while more rural regions saw a growth of just 3.1%.</li>
                    </ul>
                    <h2>What this Means</h2>
                    <ul>
                      <li>Students who work hard to be at the top of their class end up reaching a ‘glass ceiling’ due to this lack of resources.</li>
                      <li>This prevents intelligent and dedicated students from being able to attend some of the top universities or work higher paying jobs.</li>
                      <li>Many families are kept trapped in poverty by this glass ceiling, so it is time that this barrier is shattered.</li>
                    </ul>
                    <h2>Our Solution</h2>
                    <ul>
                      <li>Here at Project Shatter we have created a network specifically for these students that enables them to learn and gain experience in the field of technology while simultaneously earning the income their families rely on.</li>
                      <li>Through their school, students can connect to a network of educational resources and opportunities to participate in real world projects with real companies and nonprofit organizations.</li>
                    </ul>
                    <h2>Why this Works</h2>
                    <ul>
                      <li>Our system allows students to learn more about Computer Science while being paid to work on real world projects.</li>
                      <li>This not only opens up more full-time job opportunities for these students in the future, but it can help create an impressive resume to increase a student’s chances of being accepted into a prestigious university.</li>
                    </ul>

                    <center>
                      <h3><span className="highlight">Click Below to Get Started!</span></h3>
                    </center>



                    {/* <p>Poverty is a major issue throughout the nation, especially in the state of Georgia. 
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
                    It is time  to shatter this barrier.</span></p> */}
                  </div>
                </div>
              </div>
              <div className="item">
                  <h4>I am a...</h4>
                  <div className="ui buttons">
                    <button className="ui teal button">High School Student</button>
                    <div className="or"></div>
                    <button className="ui teal button">Small Business Owner</button>
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
