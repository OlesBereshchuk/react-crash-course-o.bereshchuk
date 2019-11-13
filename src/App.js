import React, { Component, useState } from 'react';
import Button from './components/Button';
import { ButtonFontStyle } from './components/ButtonFontStyle';
import './App.css';

function App () {
  const [ButtonFontStyleValue,setButtonFontStyleValue] = useState(true);

  const handleFontStyleByHOC = () => {
    setButtonFontStyleValue(!ButtonFontStyleValue);
  }

  return (
    <div className="App">
        <div>
          <ButtonFontStyle.Provider value={ButtonFontStyleValue}>
            <Button/> 
          </ButtonFontStyle.Provider>
          <button onClick={handleFontStyleByHOC} >Change Font Weight(HOC)</button>
        </div>
    </div>
  );
}

export default App;
