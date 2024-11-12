import React from 'react'
import './Img.css';

export default function Img({ imgIndex, onClick, ...restProps }) {
  return (
  <img src={`${process.env.PUBLIC_URL}/img/${imgIndex}`}
  onClick={onClick}
  {...restProps}
  />
  )
}
