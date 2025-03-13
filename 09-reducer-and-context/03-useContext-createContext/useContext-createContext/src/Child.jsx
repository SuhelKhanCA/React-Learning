import React from "react";
import GrandChild from "./GrandChild";
// function Child({ myFunction }) {
function Child() {
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#a25",
      }}
    >
      <h1>Child</h1>
          {/* <GrandChild myFunction={myFunction} /> */}
          <GrandChild/>
      </div>
  );
}

export default Child;
