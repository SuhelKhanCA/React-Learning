import React from "react";
import { useState } from "react";

// custom hooks
// useRef
// diff b/w useRef and useState
// handle form inputs using useRef

function ExampleUseRef() {
  console.log("Component rendered");

  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("Suhel");
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
          <h4>{username}</h4>
          <button onClick={() => {
              setUsername("Monu");
          }}>Change Name</button>
    </div>
  );
}

export default ExampleUseRef;
