import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'
import Dummy from './Dummy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dummy />
      <h2>Dummy heading</h2>
      <p>
      This ius a dummly para.
      </p>
      <Dummy /> */}
      
      <UserProfile/>
    </>
  )
}

export default App
