import React from 'react';
import ButtonMarkup from './ButtonMarkup';
import ShowResponse from './ShowResponse';
import Error from './Error';
import '../components_style/ButtonWrapper.css';

class Button extends React.Component {

  state = {
    users:[],
    cacheResponse:[],
    showResponse:false,
    showError:false,
    cache:false,
  }

  fetchData = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await data.json();
    this.setState({
      users:users,
      cacheResponse:users,
      showResponse:true,
      showError:false,
      cache:true
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
      if (err.name === 'AbortError') {
        this.setState({
          showResponse:false,
          showError:true
        })
      } else {
        throw err;
      }
    }
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
          {this.state.showError && <Error cacheResponse={this.state.cacheResponse} fetchData={this.fetchData}/> }
      </div>
    );
  }
}

export default Button;
