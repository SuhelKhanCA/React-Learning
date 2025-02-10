import React from 'react'
import {useRef} from 'react'
// Controlled vs
// uncontrolled components
function ControlledUncontrolled() {
    // Example useRef()
    const usernameRef = useRef();
    const passwordRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(usernameRef.current);
        console.log(usernameRef.current.value);

        console.log(passwordRef.current);
        console.log(passwordRef.current.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" ref={usernameRef} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" ref={passwordRef} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ControlledUncontrolled;