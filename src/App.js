import React, { Component, useState } from 'react';
import Button from './components/Button';
import { ButtonFontStyle } from './components/ButtonFontStyle';
import './App.css';

function App () {
  const [ButtonFontStyleValue,setButtonFontStyleValue] = useState('bold');
  return (
    <div className="App">
        <div>
          <ButtonFontStyle.Provider value={ButtonFontStyleValue}>
            <Button/> 
          </ButtonFontStyle.Provider>
        </div>
    </div>
  );
}

export default App;
