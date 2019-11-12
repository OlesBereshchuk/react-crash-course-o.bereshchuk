import React from 'react';

function ButtonMarkup(props){
  return (
      <button onClick={props.func}>{props.name}</button>
    )
} 
 
export default ButtonMarkup;