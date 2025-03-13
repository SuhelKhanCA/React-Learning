import { useState } from "react";
import MyComponent from "./MyComponent";
import "./App.css";

// Props drilling

// Parent
//   |
// Child
//   |
// GrandChild

// ---------------Context Wrapper----------

// context
// to avoid prop drilling

// how to use context ?
// step 1: import from react
// step 2: create a context outside the component
// step 3: wrap application in context.Provider

// produce: provider
// consume: consumer

import { createContext } from "react";

export const MyAppContext = createContext();

function App() {
  function myFunction() {
    console.log("Hello from  my function");
  }
  return (
    <>
      {/* <MyAppContext.Provider value={myFunction}> */}
      <MyAppContext.Provider value={{
        key1 : "value1",
        key2: "value2",
        someFunction: myFunction
      }}>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#2d34",
            height: "100vh",
          }}
        >
          <h1>App</h1>
          {/* <MyComponent myFunction={myFunction} /> */}
          <MyComponent />
        </div>
      </MyAppContext.Provider>
    </>
  );
}

export default App;
