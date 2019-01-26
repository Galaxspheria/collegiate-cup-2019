import React, { Component } from 'react';

const data = [
    {
        title: "A",
        price: 123,
        time: 12
    }, {
        title: "B",
        price: 222,
        time: 5
    }, {
        title: "C",
        price: 1,
        time: 7
    }, {
        title: "A",
        price: 123,
        time: 12
    }, {
        title: "B",
        price: 222,
        time: 5
    }, {
        title: "C",
        price: 1,
        time: 7
    },
    {
        title: "A",
        price: 123,
        time: 12
    }, {
        title: "B",
        price: 222,
        time: 5
    }, {
        title: "C",
        price: 1,
        time: 7
    },
]

class ChallengeList extends Component {
  render() {
    return (
      <div className="ChallengeList pattern-bg">
        <div className="ui grid container page-height">
            <div className="four wide teal column">
                <h4 className="ui header">FILTER</h4>
            </div>
            <div className="twelve wide white column scroll-list">
                <h2 className="ui header">My Projects and Challenges</h2>
                <div className="ui divider"></div>
                <div className="ui items">
                    {data.map((d) => (
                        <div className="item">
                            <div className="ui small image">
                            <img src="/images/image.png"/>
                            </div>
                            <div className="content">
                            <div className="header">{d.title}</div>
                            <div className="meta">
                                <span className="price">${d.price}</span>
                                <span className="stay">{d.time} Days</span>
                            </div>
                            <div className="description ui placeholder">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
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

export default ChallengeList;
