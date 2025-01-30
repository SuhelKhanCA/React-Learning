import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import ArrayStateExample from "./ArrayStateExample";
import ObjectStateExample from "./ObjectStateExample";

// hooks:
// class based component : old way
// useState
// useEffect

// We can't use normal vars to change the UI

// state
// state stores --> data
// when state change => re-render the UI


// useState : a hook
// useState(defaultValue)
// returns : [stateValue, functionToUpdateThatStateValue]


function App() {
  // let firstName = "John";

  // function changeName() { // var is changed but UI does not changed
  //   console.log(firstName);
  //   firstName = "Suhel";
  //   console.log(firstName);
  // }


  // state ---> "Harshit"
  // state chage ---> "Suhel"

  // when state changes, our component re-renders
  // then UI changes

  // const returnedValue = useState("Harshit");
  // const firstName = returnedValue[0];
  // const functionToUpdateFirstName = returnedValue[1];

  const [firstName, setFirstName] = useState("Harshit");
  // wrapper
  function handleNameChange() {
    setFirstName("Suhel");
  }
  // return (
  //   <>
  //     <h1>{firstName}</h1>
  //     <button onClick={handleNameChange}>Click me</button>
  //   </>
  // );

  return (
    <>
      {/* <Counter /> */}
      {/* <ArrayStateExample /> */}
      <ObjectStateExample />
    </>
  )
}

export default App;
