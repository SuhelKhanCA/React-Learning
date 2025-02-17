import React, { useState } from "react";
import ShowCountValue from "./ShowCountValue";

function Counter() {
    const [counter, setCounter] = useState(0);
    function handleIncrease() {
        setCounter(() => {
            console.log("Setting state one 1");
            return counter + 1;
        });
        setCounter(() => {
          console.log("Setting state 2");
          return counter + 1;
        });
        setCounter(() => {
          console.log("Setting state 3");
          return counter + 1;
        });
    }
  return (
    <div>
      <h2><ShowCountValue count={counter} /></h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
     
                  // above just increase by one
                  // props are immmutable
        }}
      >
        Increase
      </button>
      <button
        onClick={handleIncrease}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          }
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
