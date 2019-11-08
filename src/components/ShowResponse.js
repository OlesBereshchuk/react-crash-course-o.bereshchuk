import React from 'react';

function ShowResponse(props){
  return (
      <div>
        {props.response.map(user => (
            <p key={user.id}>{user.name}</p>
        ))}   
    </div>
    )
}

export default ShowResponse;
