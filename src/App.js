import React, { Component, useState } from 'react';
import Button from './components/Button';
import { ButtonFontStyle } from './components/ButtonFontStyle';
import { BackgroundColor } from './components/ContextHookComponent';
import './App.css';

function App () {
  const [ButtonFontStyleValue,setButtonFontStyleValue] = useState('normal');

  const [ButtonFontColor,setButtonFontColor] = useState('black');

  const handleFontStyleByHOC = () => {
    setButtonFontStyleValue('bold');
  }

  const handleFontStyleByHookContext = () => {
    setButtonFontColor('red');
  }

  return (
    <div className="App" style={{backgroundColor : BackgroundColor}}>
        <div>
          <ButtonFontStyle.Provider value={ButtonFontStyleValue}>
            <Button/> 
          </ButtonFontStyle.Provider>
          <div>
            <button onClick={handleFontStyleByHOC} >Change Font Weight(HOC)</button>
          </div>
          <div>
            <button onClick={handleFontStyleByHookContext} >Change Font Weight(UseContext)</button>
          </div>
        </div>
    </div>
  );
}

export default App;
