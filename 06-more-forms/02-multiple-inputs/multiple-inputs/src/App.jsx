import { useState } from 'react'
import HandleMultipleInputsImpro from "./HandleMultipleInputImpro";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HandleMultipleInputsImpro/>
    </>
  )
}

export default App
