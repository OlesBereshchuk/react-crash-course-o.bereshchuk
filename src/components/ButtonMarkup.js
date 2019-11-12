import React from 'react';

import { ButtonFontStyle } from './ButtonFontStyle';

function ButtonMarkup(props){
  return (
    <ButtonFontStyle.Consumer>
      {(value) => (        
        <button onClick={props.func} style={{fontWeight: value}}>{props.name}</button>
      )}
    </ButtonFontStyle.Consumer>
    )
} 
 
export default ButtonMarkup;