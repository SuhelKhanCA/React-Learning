import React from "react";
import Child from "./Child";
// function MyComponent({ myFunction }) {
function MyComponent() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#c55",
      }}
    >
      <h1>Parent</h1>
      {/* <Child myFunction={myFunction} /> */}
      <Child/>
    </div>
  );
}

export default MyComponent;
