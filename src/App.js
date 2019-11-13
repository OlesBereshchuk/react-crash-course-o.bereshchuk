import React, { Component, useState } from 'react';
import Button from './components/Button';
import { ButtonFontStyle } from './components/ButtonFontStyle';
import './App.css';

function App () {
  const [ButtonFontStyleValue,setButtonFontStyleValue] = useState('light');

  const handleFontStyleByHOC = () => {
    setButtonFontStyleValue('bold');
  }

  return (
    <div className="App">
        <div>
          <ButtonFontStyle.Provider value={ButtonFontStyleValue}>
            <Button/> 
          </ButtonFontStyle.Provider>
          <div>
            <button onClick={handleFontStyleByHOC} >Change Font Weight(HOC)</button>
          </div>
          <div>
            <button onClick={handleFontStyleByHOC} >Change Font Weight(UseContext)</button>
          </div>
        </div>
    </div>
  );
}

export default App;
