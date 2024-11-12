import React, { Component } from 'react';
import './Img.css';

export default class Img extends Component {
  render() {
    const { imgIndex, onClick, ...restProps } = this.props;
    return (
      <img src={`${process.env.PUBLIC_URL}/img/${imgIndex}`}
      onClick={onClick}
      {...restProps}
      />
    );
  }
}
