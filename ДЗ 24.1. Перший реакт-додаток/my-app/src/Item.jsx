import React from 'react'
import './Item.scss';

export default function Item({ value }) {
  return (
    <div className='item'>{value}</div>
  )
}
