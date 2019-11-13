import React from 'react';

import { withButtonFontStyle } from './ButtonFontStyle';

function ButtonMarkup(props){
  console.log(props.fontWeight);
  const fontStyle = props.fontWeight ? 'light' : 'bold';
  console.log(fontStyle);
  return (      
        <button onClick={props.func} style={{fontWeight:fontStyle}}>{props.name}</button>
    )
} 
 
export default withButtonFontStyle(ButtonMarkup);