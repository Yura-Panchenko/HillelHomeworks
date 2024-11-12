import './App.css';

import React, { Component } from 'react'
import Img from './Img';
import Result from './Result';

export default class App extends Component {

  defaultState = {
    smileys: [
      { name: "Smiley 1", img: "1.png", count: 0 },
      { name: "Smiley 2", img: "2.png", count: 0 },
      { name: "Smiley 3", img: "3.png", count: 0 },
      { name: "Smiley 4", img: "4.png", count: 0 },
      { name: "Smiley 5", img: "5.png", count: 0 },
    ],
    highestSmiley: null,
  };

  constructor(props) {
    super(props);
    const savedState = JSON.parse(localStorage.getItem("stateStorage"));
    this.state = savedState ? savedState : this.defaultState;
  }

componentDidUpdate() {
  localStorage.setItem("stateStorage", JSON.stringify(this.state));
}

  handleVote = (event) => {
    const smileyIndex = parseInt(event.target.getAttribute('data-index'));

    const copySmileys = [...this.state.smileys];
    copySmileys[smileyIndex].count ++;

    this.setState ({
      smileys: copySmileys,
    });
  };

  showResults = () => {
    const highestSmiley = this.state.smileys.reduce((max, smiley) => {
      return smiley.count > max.count ? smiley : max;
    });
    if (highestSmiley.count !== 0) {
      this.setState({ highestSmiley });
    }
  };

  resetResults = () => {
    const highestSmiley = null;
    const smileys = [];
    this.state.smileys.map((smiley) => {
      const clearedSmiley = smiley;
      clearedSmiley.count = 0
      smileys.push(clearedSmiley);
    });
    this.setState({ smileys, highestSmiley });
  };

  render() {

    return (
      <div className='wrapper'>
        <h1>Голосування за найкращий смайлик</h1>
        <div className="row">
          {this.state.smileys.map((smiley, index) => (
            <div className="column" key={index}>
              <Img imgIndex= {smiley.img} data-index={index} onClick={this.handleVote}/>
              <div className='count'>{smiley.count}</div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={this.showResults}>Показати результати</button>
          <button onClick={this.resetResults}>Очистити</button>
        </div>
        {this.state.highestSmiley && (
          <Result imgIndex={this.state.highestSmiley.img} count={this.state.highestSmiley.count} />
      )}
      </div>
    )
  }
}