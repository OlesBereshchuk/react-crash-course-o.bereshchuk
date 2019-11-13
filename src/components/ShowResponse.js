import React from 'react';
import ReactDOM from 'react-dom';

function ShowResponse(props){
  return ReactDOM.createPortal(
        <div>
            {props.response.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>,
        document.getElementById('showResponse-portal')
    )
}

export default ShowResponse;
