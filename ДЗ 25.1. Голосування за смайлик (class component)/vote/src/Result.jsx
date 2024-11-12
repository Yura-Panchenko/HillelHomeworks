import React, { Component } from 'react';
import Img from './Img';
import './Result.css'

export default class Result extends Component {
  render() {
    const { imgIndex, count } = this.props;
    return (
    <div className="result">
    <h3>Результати голосування:</h3>
    <h4>Переможець:</h4>
    <Img imgIndex={imgIndex} />
    <p>Кількість голосів: {count}</p>
    </div>
    )
  }
}

