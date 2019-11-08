import React, { Component } from 'react';

class ButtonMarkup extends Component {   
  render() {
    const {name} = this.props;
    return (
        <button onClick={this.props.func}>{name}</button>
    );
  }
}
 
export default ButtonMarkup;