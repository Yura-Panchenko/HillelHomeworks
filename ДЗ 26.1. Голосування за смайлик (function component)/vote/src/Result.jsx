import React from 'react'
import Img from './Img';
import './Result.css'

export default function Result({ highestSmiley }) {
  return (
    <div className="result">
    <h3>Результати голосування:</h3>
    <h4>Переможець:</h4>
    <Img imgIndex={highestSmiley.img} />
    <p>Кількість голосів: {highestSmiley.count}</p>
    </div>
  )
}
