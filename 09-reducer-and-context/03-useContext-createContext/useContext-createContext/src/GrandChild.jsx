import React, { useContext } from "react";
import { MyAppContext } from "./App";

// function GrandChild({myFunction}) {
function GrandChild() {
  //  const returnedVal =  useContext(MyAppContext);
  //  const myFunc =  useContext(MyAppContext);
  // console.log(returnedVal);

  const { someFunction, key1 } = useContext(MyAppContext);

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#6b6c",
      }}
    >
      <h1>GrandChild</h1>
      <p>{key1}</p>
      {/* <button onClick={myFunction}>Click</button> */}
      <button onClick={someFunction}>Click</button>
    </div>
  );
}

export default GrandChild;
