import { useState } from 'react'

import './App.css'
import ExampleUseRef from './ExampleUseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExampleUseRef />
    </>
  )
}

export default App
