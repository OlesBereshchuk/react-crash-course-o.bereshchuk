import React, { useContext } from 'react';

import { withButtonFontStyle, ButtonFontColor } from './ButtonFontStyle';

function ButtonMarkup(props) {
  
  const fontColorByHook = useContext(ButtonFontColor);
  
  return (      
    <button onClick={props.func} style={{fontWeight:props.fontWeight, color: fontColorByHook}}>{props.name}</button>
  )
} 
 
export default withButtonFontStyle(ButtonMarkup);