import React from 'react';
import ButtonMarkup from './ButtonMarkup';

function Error(props){
    return (
        <div>
            <h1>Request is failed!!</h1>        
            <div 
                className="ButtonWrapper"
            >
               <ButtonMarkup name="Повторить  запрос" func={props.fetchData}/>
            </div>
        </div>
      )
} 

export default Error;
