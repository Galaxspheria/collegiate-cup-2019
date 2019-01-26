import React, { Component } from 'react';

const data = [
    {
        title: "A",
        price: 123,
        time: 12
    },
    {
        title: "B",
        price: 222,
        time: 5
    },
    {
        title: "C",
        price: 1,
        time: 7
    },
]

class ChallengeList extends Component {
  render() {
    return (
      <div className="ChallengeList">
        <div className="ui grid container">
            <div className="four wide teal column">
                Filter Challenges
            </div>
            <div className="eight wide column">
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
