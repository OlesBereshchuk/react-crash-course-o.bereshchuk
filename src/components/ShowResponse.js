import React from 'react';

class ShowResponse extends React.Component {

  render() {
    const {response} = this.props;
    return (
      <div>
        {response.map(user => (
            <h1 key={user.id}>{user.name}</h1>
        ))}  
      </div>
    );
  }
}

export default ShowResponse;
