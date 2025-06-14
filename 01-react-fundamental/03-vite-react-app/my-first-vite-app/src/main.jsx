import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function Hello() {
  return <h1>Hello World ...!</h1>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello/>
  </StrictMode>,
)
