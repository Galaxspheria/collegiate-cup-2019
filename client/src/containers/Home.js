import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../styles/Home.css';

const particleConfig = {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#008080"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1.5782952832645452,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

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
            <h2>A problem in need of a solution</h2>
            <p>Poverty is a major issue throughout the nation, especially in the state of Georgia. 
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
          </div>
          <Particles className="particle-bg" params={particleConfig} height="100vh"/>
        </div>
    );
  }
}

export default Home;
