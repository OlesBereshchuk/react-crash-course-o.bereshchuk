import React, { Component } from 'react';

class ButtonMarkup extends Component {   
  render() {
    const {name} = this.props;
    return (
        <button>{name}</button>
    );
  }
}

export default ButtonMarkup;