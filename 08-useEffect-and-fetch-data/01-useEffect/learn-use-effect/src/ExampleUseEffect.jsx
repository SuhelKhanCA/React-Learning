import React, { useEffect, useState } from 'react'

// useState

// useEffect
// fetch data from api
// eventListeners
// side effects


// class based component : Not used no
// react life cycle methods -> (componentDidMount)


// useEffect
// it takes callback function as input

// first arg -> callback
// second arg -> dependency array
// useEffect will be called only once
// dependency array with some value : On changes, useEffect re-rendered

function ExampleUseEffect() {
    const [counter, setCounter] = useState(0);
    console.log("component rendered");
    useEffect(() => { // every time get rendered on component rendering
        console.log("Inside use effect!");
    }, [counter])
  return (
      <div>
          <h2>On component rendering : useEffect</h2>
          <h3>{counter}</h3>
          <button onClick={() => {
              setCounter(counter + 1);
          }}>Increase</button>
    </div>
  )
}

export default ExampleUseEffect;