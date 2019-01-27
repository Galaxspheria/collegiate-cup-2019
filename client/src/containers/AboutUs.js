import React, { Component } from 'react';
import firebase from "../components/Firebase";

class AboutUs extends Component {
  render() {
    return (
        <div className="AboutUs">
          <div className="ui container midz title-header">
            <h1 style={{fontSize: 40}}>About Us</h1>
            <h3>Get to know a bit more about who we are, what our mission is, and why you should get involved</h3>
          </div>
          <div className="ui white container segment teal homepage midz">
            <div className="ui items homepage-content">
              <div className="item">
                <div className="content">
                  <div className="description">
                  <h2>A problem in need of a solution</h2>
                    <p>     Poverty is a major issue throughout the nation, especially in the state of Georgia. 
                        According to the Georgia Partnership for Excellence in Education “approximately one 
                        out of four children in Georgia live in a home with an income at or less than the federal 
                        poverty level, and more than 60% of the state’s public school students qualify for free 
                        or reduced-price lunch”. Although the situation across the entire state is dire, it is 
                        those who live in the more rural regions that suffer the most. In regions such as Bibb, 
                        Clarke and Richmond the percentage exceeds 40%. Furthermore, these regions are falling even 
                        further behind areas such as Atlanta, which saw a 10.4% increase in  while the more rural 
                        regions saw a growth of just 3.1%. With such staggering numbers, it is no surprise that 
                        students in these regions are struggling. Whether it’s the need to work full time after 
                        school, as approximately 30% are, or a lack of resources, 28.1% of Georgians are without 
                        access to broadband and many schools do not offer an AP Computer Science course, students 
                        living in rural areas are at a significant disadvantage. Despite their best efforts, students 
                        end up reaching a ‘glass ceiling’ due to these disadvantages. This prevents intelligent and 
                        dedicated students from being able to attend some of the top universities or work higher paying 
                        jobs. Many families are kept trapped in poverty by this glass ceiling, so it is time that this 
                        barrier is shattered.</p>
                    
                    <h2>What we plan to do about it</h2>
                    <p> Here at Project Shatter we have created a network specifically for these students that enables 
                        them to learn and gain experience in the field of technology while simultaneously earning the 
                        income their families rely on. How is this possible? Project Shatter works within schools systems 
                        of rural districts, connecting its students to a network of educational resources and 
                        opportunities to participate in real world projects. How this works is that organizations with 
                        job opportunities post tasks to our network for students to apply for. After an organization 
                        selects the student(s) that it feels is best for the position, the accepted student(s) can begin 
                        working directly for this organization. Along with this, we provided an abundance of free resources 
                        for students to use in order to improve their understanding of Computer Science. Students can 
                        practice their programming skills through our coding challenges, or challenges posted by 
                        organizations looking for students to hire. The more a student practices, the more likely they are 
                        to be selected by organizations. Through this system, students are able to learn more about Computer 
                        Science while being paid to work on real world projects. As a result, students gain more exposure to 
                        companies often based only near cities, opening up potential full-time employment in the future and 
                        developing an impressive resume for college applications. Project Shatter creates an environment in 
                        which hard working students can thrive, no longer being held back by a lack of resources.</p>

                        <h2>Who is involved and why choose Project Shatter?</h2>
                        <h4><span className="highlight">The Student</span></h4>
                        <p>Why should a student choose to compete every time he or she wants to complete a task instead of 
                            seeking easier, steady employment? The typical job held by high schoolers in rural regions of 
                            Georgia involve working at a fast food chain, or something similar. These jobs pay just above the 
                            state minimum wage of $7.25 per hour. In contrast, entry level technical jobs start at a rate of 
                            $15 per hour. If these students could receive even just $10 per hour for doing the absolute basics 
                            of computer science, it is better to work on these tasks than spend hours each day at one of the 
                            other typical high school jobs. Furthermore, by completing tasks for organizations, students are 
                            setting themselves up for future success. Organizations that are satisfied by a student’s work may 
                            offer future employment at said organization. Students are also able to create a more impressive 
                            college application, increasing their chances of being accepted into more prestigious universities. </p>

                        <h4><span className="highlight">Local Businesses</span></h4>
                        <p>Local businesses can use Project Shatter to quickly find students willing to work for a cheap rate 
                            that can handle technology related tasks. For example, if a local grocery store wanted to create a 
                            website, it would either cost thousands of dollars to hire a professional, or many hours of the owners’ 
                            time in order to make it for free. Instead, the business can hire a student with some experience with 
                            web development to do the task, saving both time and money.</p>

                        <h4><span className="highlight">Nonprofit Organizations</span></h4>
                        <p>Nonprofit organizations such as the Georgia Partnership for Excellence in Education are able to use 
                            Project Shatter to serve the students in their communities. Many nonprofit organizations experience 
                            technical issues and oftentimes cannot afford a full time technician to deal with. Hiring students 
                            to do individual tasks can save money and serve the community at the same time. </p>

                        <h4><span className="highlight">Larger Companies</span></h4>
                        <p>Companies are looking to increase the diversity of their workforce, as well as show that they are 
                            good members of their community, which Project Shatter is able to provide. In addition, many tech 
                            companies are struggling to find qualified candidates for their open positions. According to the 
                            GPEE, Georgia’s rank of 34 in unemployment rate is partly due to “a mismatch between the skills 
                            that employers want and the skills that our general population has”. Companies using Project Shatter 
                            can find students willing to work for lower wages (relative to technology-related jobs) that can 
                            help fill the positions companies are trying hard to fill. Even if the students are not immediately 
                            able to fill those positions, they can learn the skills necessary through working with the company, 
                            benefiting both the student and the company in the long run.</p>

                        <h2>Working for a better tomorrow</h2>
                        <p>Project Shatter is providing the connections students need to reach their full potentials through
                            means that are beneficial to all involved. We are constantly striving to make the world a better
                            place, and Project Shatter is a stepping stone on the path to success.</p>

                  </div>
                </div>
              </div>
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
        </div>
    );
  }
}

export default AboutUs;
