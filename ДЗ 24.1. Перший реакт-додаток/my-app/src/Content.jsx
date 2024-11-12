import React, {useState} from 'react';
import Item from './Item'

export default function Content({ activeButton }) {
  const [count, setCount] = useState(5);
  return (
    <div className='content'>
        {Array.from({ length: count }, (_, index) => (
          <Item key={index} value={activeButton} />
        ))}
    </div>
  )
}
