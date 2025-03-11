import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

function App() {
  // const [state, setState] = useState({count:0});

  // const handleIncrease = () => {
  //   setState((prev)=> ({...prev, count: prev.count + 1}))
  // }
  // const handleDecrease = () => {
  //   setState((prev) => ({ ...prev, count: prev.count - 1 }));
  // };

  // const handleReset = () => {
  //   setState((prev) => ({ ...prev, count: 0 }));
  // };

  // useReducer
  // state, dispatch fxn

  // as arg
  // 1. reducer fxn
  // 2. initialState

  // dispatch fxn
  // we object(action) as an arg

  // reducer fxn
  // 1. state
  // 2. action

  const handleIncrease = () => {
    dispatch({
      type: "INCREASE",
    });
  };
  const handleDecrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  function reducer(state, action) {
    if (action.type === "INCREASE") {
      return { ...state, count: state.count + 1 };
    }
    if (action.type === "DECREASE") {
      return { ...state, count: state.count - 1 };
    }
    if (action.type === "RESET") {
      return { ...state, count: 0 };
    }

    // throw new Error("Invalid Action type");

    return state;
  }
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>useReducer Example</h1>
      <h1>Counter Application</h1>
      <div className="card">
        <h3>count is {state.count}</h3>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
