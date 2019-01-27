import React, { Component } from 'react';
import firebase from "../components/Firebase";

class StudentResources extends Component {
  render() {
    return (
        <div className="StudentResources">
          <div className="ui container midz title-header">
            <h1 style={{fontSize: 40}}>Helpful Resources</h1>
            <h3>Here you can find an abundance of resources to help you expand you knowledge and abilities</h3>
          </div>
          <div className="ui white container segment teal homepage midz">
            <div className="ui items homepage-content">
              <div className="item">
                <div className="content">
                  <div className="description">
                    <h1>Helpful Coding Class Websites</h1>
                    <ul>
                      <li><a href="https://www.codecademy.com">Code Academy</a></li>
                      <li>This site revolves around teaching you how to code via interactive learning. This is a perfect entrance to coding for beginners, and is essentially a free coding bootcamp.</li>
                      <li><a href="https://www.coursera.org ">Coursera</a></li>
                      <li>Contains a large online course library, where classes are taught by real university professors. All courses are free of charge, although you have the option to pay for a “Coursera Verified Certificate” to prove course completion if you so desire.</li>
                      <li><a href="https://www.codewars.com/">Code Wars</a></li>
                      <li>A fun way to learn coding. With a martial-arts theme, the program is based on challenges called “kata.” Complete them to earn honor and progress to higher ranks.</li>
                      <li><a href="https://www.khanacademy.org/">Khan Academy</a></li>
                      <li>As its motto states, on Khan Academy “you can learn anything”. An excellent resource for exploring a variety of computing related topics.</li>
                    </ul>
                    <h2>Excellent Video Tutorials</h2>
                    <ul>
                      <li><a href="https://www.youtube.com/user/CodersGuide">Coders Guide</a></li>
                      <li>Features an abundance of videos teaching topics such as HTML, CSS, JavaScript, and Bootstrap.</li>
                      <li><a href="https://www.youtube.com/user/thenewboston">The New Boston</a></li>
                      <li>This channel has posted over 4,000 videos on a range of programming languages, game development, and design.</li>
                    </ul>
                    <h2>Useful Blogs</h2>
                    <ul>
                      <li><a href="https://alistapart.com/">A List Apart</a></li>
                      <li>A collaboration among many authors who write books, have events, and run a great development and design blog, which is easy to understand even for beginners.</li>
                      <li><a href="https://css-tricks.com/">Css Tricks</a></li>
                      <li>Goes deep into CSS with their big, bad CSS almanac. However, it now goes beyond just CSS and talks about other things like Sass, JavaScript, PHP, and more.</li>
                      <li><a href="https://www.sitepoint.com/">Sitepoint</a></li>
                      <li>This site has lots of writers and publishes often. Topics range from HTML and CSS to entrepreneurship. </li>
                    </ul>
                    <h2>More Specialized Resources</h2>
                    <ul>
                      <li><a href="https://learn.skillcrush.com/skillcrush-free-bootcamp/">Skillcrush</a></li>
                      <li>Primary focus: HTML and CSS. Skillcrush’s free coding bootcamp is a perfect place to start for absolute beginners. You’ll learn what it means to work in tech, get digestible definitions of common industry lingo, and get the chance to write your first lines of code.</li>
                      <li><a href="http://conqueringthecommandline.com/book">Conquering The Command Line</a>
                        <li>Primary focus: Command Line. Free online book by Mark Bates. Very in-depth.</li>
                      </li>
                      <li><a href="http://try.github.io/">Try Github</a></li>
                      <li>Primary focus: Git/Github. An interactive series of challenges to learn about and experiment with Git. Created by Code School.</li>
                      <li><a href="https://www.javascript.com/">JavaScript</a></li>
                      <li>Primary focus: Javascript. Created by Code School. Quick and perfect for absolute beginners. Contains 9 mini-lessons. At the end, it points you to more in-depth JS learning materials.</li>
                      <li><a href="http://www.learnpython.org/">LearnPython</a></li>
                      <li>Primary focus: Python. Interactive online tutorial to learn Python coding. Has a convenient window at the bottom where you can write your code as you go through the lessons.</li>
                      <li><a href="http://www.mysqltutorial.org/">MySQL Tutorial</a></li>
                      <li>Primary focus: MySQL (Databases). Offers a range of MySQL tutorials including how to use MySQL as a developer and database administrator. They offer over ten different MySQL tutorials in total.</li>
                      <li><a href="https://hackdesign.org/">Hack Academy</a></li>
                      <li>Primary focus:  Web Development. HackDesign is, “an easy to follow design course for people who do amazing things.” Topics include typography, interaction design, front-end design, and more.</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default StudentResources;
