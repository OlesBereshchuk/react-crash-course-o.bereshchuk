import React, {useState, useEffect} from 'react';
import ButtonMarkup from './ButtonMarkup';
import ShowResponse from './ShowResponse';
import Error from './Error';
import '../components_style/ButtonWrapper.css';

export default function Button () {

  const [users,setUsers] = useState([]);

  const [showResponse,setShowResponse] = useState(false);

  const [showError, setShowError] = useState(false);

  const fetchData = async () => { 
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await data.json();
    setUsers(users);
    setShowError(false);
    setShowResponse(true);
  }

  const abortRequest = async () => {
    const controller = new window.AbortController();
    controller.abort();
    try {
      await fetch('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal
      });
    } catch(err) {
      if (err.name === 'AbortError') {
        setShowResponse(false);
        setShowError(true);
      } else {
        throw err;
      }
    }
  }
  
  return (
    <div>
        <div className="ButtonWrapper">
          <ButtonMarkup name="Отправить запрос"  func={fetchData}/>
        </div>
        <div className="ButtonWrapper">
          <ButtonMarkup name="Отменить запрос"   func={abortRequest} />
        </div>
        {showResponse && <ShowResponse response={users} />}
        {showError && <Error  fetchData={fetchData}/> }
    </div>
  );
}
