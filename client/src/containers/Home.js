import React, { Component } from 'react';
import '../styles/Home.css';
import BGParticles from '../components/BGParticles';
import { Icon } from 'semantic-ui-react'

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
            <div className="ui grid" style={{marginLeft: "-4rem", marginRight: "-4rem", marginTop: "-4rem"}}>
              <div className="eight wide teal column">
                <div className="home-icon-parent">
                  <Icon name='chart pie' className="home-icon"/>
                </div>
              </div>
              <div className="eight wide column">
                <div className="description homepage-content-block">
                  <h2>A Few Shocking Statistics</h2>
                    <span className="highlight">25%</span> of children in Georgia live in a home with an income at or less than the federal poverty level.
                    <br/><br/><span className="highlight">28.1%</span> of Georgians live without access to broadband.
                    <br/><br/>From 2010 to 2015, Atlanta experienced a <span className="highlight">10.4%</span> increase in jobs while more rural regions saw a growth of just <span className="highlight">3.1%</span>.
                </div>
              </div>
            </div>
            <div className="ui grid" style={{marginLeft: "-4rem", marginRight: "-4rem"}}>
              <div className="eight wide column">
                <div className="description homepage-content-block">
                  <h2>What this Means</h2>
                    Students who work hard to be at the top of their class end up reaching a <span className="highlight">glass ceiling</span> due to this lack of resources.
                    <br/><br/>This prevents intelligent and dedicated students from being able to attend top universities and pursue higher paying jobs.
                    <br/><br/>Many families are kept trapped in poverty by this glass ceiling. <span className="highlight">It is time to shatter this barrier</span>.                </div>
              </div>
              <div className="eight wide teal column">
                <div className="home-icon-parent">
                  <Icon name='warning circle' className="home-icon"/>
                </div>
              </div>
            </div>
            <div className="ui grid" style={{marginLeft: "-4rem", marginRight: "-4rem"}}>
              <div className="eight wide teal column">
                <div className="home-icon-parent">
                  <Icon name='sitemap' className="home-icon"/>
                </div>
              </div>
              <div className="eight wide column">
                <div className="description homepage-content-block">
                  <h2>Our Solution</h2>
                    Here at Project Shatter we have created a network specifically for these students that enables them to <span className="highlight">learn and gain experience</span> in the field of technology while simultaneously <span className="highlight">earning the income</span> their families rely on.
                    <br/><br/>Through their school, students can connect to a network of educational resources and opportunities to participate in <span className="highlight">real world projects</span> with real companies and nonprofit organizations.
                </div>
              </div>
            </div>
            <div className="ui grid" style={{marginLeft: "-4rem", marginRight: "-4rem", marginBottom: "-4rem"}}>
              <div className="eight wide column">
                <div className="description homepage-content-block">
                  <h2>Why this Works</h2>
                    <br/><br/>Our platform allows students to learn more about Computer Science while being paid to work on real world projects.
                    <br/><br/>This not only opens up more <span className="highlight">full-time job opportunities</span> for these students in the future, but it can help create an impressive resume to increase a student’s chances of being accepted into a <span className="highlight">prestigious university</span>.
                </div>
              </div>
              <div className="eight wide teal column">
                <div className="home-icon-parent">
                  <Icon name='trophy' className="home-icon"/>
                </div>
              </div>
            </div>
          </div>
          <div className="ui white container segment teal homepage midz" style={{marginBottom: "4rem"}}>
            <div className="ui image center-image">
              <img className="ga-img" src="/images/gaOutline.png"/>
            </div>
            <div className="ui items homepage-content">
              
            </div>
          </div>
          <footer class="ui secondary pointing menu floating-footer">
            <div className="ui footer-img image">
              <img src="/images/gaOutline.png"/>
            </div>
            <div className="floater-text"><strong>Join Us Today</strong></div>
            <div className="right menu">
              <div className="floater-text">I am a...</div>
              <div className="ui buttons floater-buttons">
                <button onClick={() => this.props.history.push("/login/")} className="ui teal button">High School Student</button>
                <div className="or"></div>
                <button onClick={() => this.props.history.push("/login/")} className="ui teal button">Small Business Owner</button>
              </div>
            </div>
          </footer>
          <BGParticles/>
        </div>
    );
  }
}

export default Home;
