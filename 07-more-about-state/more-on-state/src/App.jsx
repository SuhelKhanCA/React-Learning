import { useState } from 'react'

import './App.css'
import ExampleUseRef from './ExampleUseRef'
import UserForm from './UserForm'
import Counter from './Counter'
import RockBandList from './RockBandList'

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
      {/* <UserForm /> */}
      {/* <Counter /> */}
      <RockBandList />
    </>
  )
}

export default App
