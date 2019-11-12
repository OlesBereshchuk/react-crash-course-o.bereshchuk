import React, {useState, useEffect, lazy, Suspense} from 'react';
import ButtonMarkup from './ButtonMarkup';
import Error from './Error';
import '../components_style/ButtonWrapper.css';

const ShowResponseComponent = lazy(() => import('./ShowResponse'));

function Button () {

  // useEffect(
  //   () => {
  //     fetchData();
  //   },[]);

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
        {showResponse && 
          <Suspense fallback={<div>Please, wait......</div>}>  
            {<ShowResponseComponent response={users} />}
          </Suspense>
        }
        {showError && <Error  fetchData={fetchData}/> }
    </div>
  );
}
export default Button;
