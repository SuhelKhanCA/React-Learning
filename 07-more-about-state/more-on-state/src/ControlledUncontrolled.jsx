import React from 'react'
import {useRef} from 'react'
// Controlled vs
// uncontrolled components
function ControlledUncontrolled() {
    // Example useRef()
    const usernameRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(usernameRef);
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username</label>
              <br />
              <input type="text" id='username' ref={ usernameRef } />
              <br />
              <button>Submit</button>
          </form>
    </div>
  )
}

export default ControlledUncontrolled;