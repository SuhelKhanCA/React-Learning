import { useState } from 'react'

import './App.css'
import ExampleUseRef from './ExampleUseRef'
import UserForm from './UserForm'

function App() {
  const [count, setCount] = useState(0)
console.log("App rendered")
  // return (
  //   <>
  //     <ExampleUseRef />
  //   </>
  // )

  return (
    <>
      <UserForm />
    </>
  )
}

export default App
