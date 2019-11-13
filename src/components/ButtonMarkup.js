import React from 'react';

import { withButtonFontStyle } from './ButtonFontStyle';

function ButtonMarkup(props){
  return (      
        <button onClick={props.func} style={{fontWeight:props.fontWeight}}>{props.name}</button>
    )
} 
 
export default withButtonFontStyle(ButtonMarkup);