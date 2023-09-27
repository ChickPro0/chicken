import { useEffect } from 'react';
import './App.css';
import Main from './compo/Main';
import axios from './axios';

function App() {

  useEffect(() => {
    axios.post('/user/read')
    .then((res) => {
      console.log(res.data.data)
    })
  }, [])

  return (
    <div>
      <Main></Main>
    </div>
  );
}

export default App;
