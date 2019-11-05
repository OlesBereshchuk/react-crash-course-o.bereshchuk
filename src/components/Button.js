import React from 'react';
import ButtonMarkup from './ButtonMarkup';
import ShowResponse from './ShowResponse';
import '../components_style/ButtonWrapper.css';

class Button extends React.Component {

  state = {
    users : [],
    showResponse:false
  }

  fetchData = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await data.json();
    this.setState({
      users:users,
      showResponse:true
    })
  }

  abortRequest = async () => {
    const controller = new window.AbortController();
    controller.abort();
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal
      });
    } catch(err) {
      console.log(err);
      if (err.name == 'AbortError') {
        alert("Прервано!");
      } else {
        throw err;
      }
    }
    this.setState({
      showResponse:false
    })
  }

  render() {
    return (
      <div>
          <div className="ButtonWrapper" onClick={this.fetchData}>
            <ButtonMarkup name="Отправить запрос" />
          </div>
          <div className="ButtonWrapper" onClick={this.abortRequest}>
            <ButtonMarkup name="Отменить запрос" />
          </div>
          {this.state.showResponse && <ShowResponse response={this.state.users} />}
      </div>
    );
  }
}

export default Button;
