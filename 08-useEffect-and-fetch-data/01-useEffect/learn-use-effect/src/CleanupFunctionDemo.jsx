import React, { useEffect, useState } from 'react'
// cleanup fxn

// useEffect -> side-Effects
// document.addEventListener


// [value]
// data fetch on mount
// post req on form submit

// cleanup fxn
// 1. before component unmount
// 2. subsequent render: value changed

// 2. when there is some value inside dependency array

// when value changes
// a. component re-render
// b. cleanup function
// c. useEffect runs

function CleanupFunctionDemo() {
  console.log("Component rendered")
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Effect callback");

    return function () { // cleanup fxn
      console.log("Cleanup fxn");
    }
  }, [counter]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increase</button>
    </div>
  )
}

export default CleanupFunctionDemo;