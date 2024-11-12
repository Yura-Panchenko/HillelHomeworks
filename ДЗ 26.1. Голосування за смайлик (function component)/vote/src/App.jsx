import './App.css';

import React, { useState, useEffect } from 'react';
import Img from './Img';
import Result from './Result';



export default function App() {
  
  const defaultSmileys = [
    { name: "Smiley 1", img: "1.png", count: 0 },
    { name: "Smiley 2", img: "2.png", count: 0 },
    { name: "Smiley 3", img: "3.png", count: 0 },
    { name: "Smiley 4", img: "4.png", count: 0 },
    { name: "Smiley 5", img: "5.png", count: 0 },
  ]

  const[smileys, setSmileys] = useState(defaultSmileys);
  const[highestSmiley, setHighestSmiley] = useState(null);
    
  useEffect(() => {
    const savedSmileys = JSON.parse(localStorage.getItem("savedSmileys"));
    const savedHighestSmiley = JSON.parse(localStorage.getItem("savedHighestSmiley"));

    if (savedSmileys) setSmileys(savedSmileys);
    if (savedHighestSmiley) setHighestSmiley(savedHighestSmiley);
    }, []);

  useEffect(() => {
    localStorage.setItem("savedSmileys", JSON.stringify(smileys));
    localStorage.setItem("savedHighestSmiley", JSON.stringify(highestSmiley));
  }, [smileys, highestSmiley]);

  const handleVote = (index) => {
    let copySmileys = [...smileys];
    copySmileys[index].count ++;
    setSmileys(copySmileys);
    showResults();
  };
  
  const showResults = () => {
    const highestSmiley = smileys.reduce((max, smiley) => {
      return smiley.count > max.count ? smiley : max;
    });
    if (highestSmiley.count !== 0) {
      setHighestSmiley(highestSmiley);
    }
  };
  
  const resetResults = () => {
    setSmileys(defaultSmileys);
    setHighestSmiley(null);
  };

  return (
      <div className='wrapper'>
        <h1>Голосування за найкращий смайлик</h1>
        <div className="row">
          {smileys.map((smiley, index) => (
            <div className="column" key={index}>
              <Img imgIndex= {smiley.img} onClick={() => handleVote(index)}/>
              <div className='count'>{smiley.count}</div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={showResults}>Показати результати</button>
          <button onClick={resetResults}>Очистити</button>
        </div>
        {highestSmiley && (
          <Result highestSmiley={highestSmiley} />
      )}
      </div>
  )
}
