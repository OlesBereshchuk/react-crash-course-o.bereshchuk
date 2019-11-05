import React from 'react';

class ShowResponse extends React.Component {

  render() {
    const {response} = this.props;
    return (
      <div>
        {response.map(user => (
            <p key={user.id}>{user.name}</p>
        ))}  
      </div>
    );
  }
}

export default ShowResponse;
