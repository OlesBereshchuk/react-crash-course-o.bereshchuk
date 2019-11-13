import React, { useContext } from 'react';

import { withButtonFontStyle } from './ButtonFontStyle';

function ButtonMarkup(props) {
  
  // const fontColorByHook = useContext(ButtonFontColor);
  
  return (      
    <button onClick={props.func} style={{fontWeight:props.fontWeight}}>{props.name}</button>
  )
} 
 
export default withButtonFontStyle(ButtonMarkup);