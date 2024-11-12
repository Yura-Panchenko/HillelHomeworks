import React, {useState} from 'react';
import './App.scss';
import Button from './Button';
import Content from './Content';

const banner = process.env.PUBLIC_URL + "/banner-starwars.jpg";;

function App() {

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <img src={banner} alt="StarWars Banner" className="banner" />
        <h1>StarWars Info.</h1>
      </div>
      <nav className="navbar">
        <Button text="People" onClick={() => handleButtonClick('people')}/>
        <Button text="Planets" onClick={() => handleButtonClick('planets')}/>
        <Button text="Vehicles" onClick={() => handleButtonClick('vehicles')}/>
      </nav>

      {activeButton && 
        <Content activeButton={activeButton} />
      }
    </div>
  );
}

export default App;
