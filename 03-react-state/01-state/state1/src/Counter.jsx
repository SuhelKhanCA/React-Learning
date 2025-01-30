import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;
