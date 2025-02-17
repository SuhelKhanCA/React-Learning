import { useEffect, useState } from 'react'
import './App.css'
import FetchDataExample from './FetchDataExample';
const URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  }

  return (
    <>
      <FetchDataExample  />
    </>
  )
}

export default App
