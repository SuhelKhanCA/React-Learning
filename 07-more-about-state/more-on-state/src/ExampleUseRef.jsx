import React from "react";
import { useRef } from "react";
import { useState } from "react";
import ControlledUncontrolled from "./ControlledUncontrolled";

// custom hooks
// useRef
// diff b/w useRef and useState
// handle form inputs using useRef

function ExampleUseRef() {
  console.log("Component rendered");

  //   const [counter, setCounter] = useState(0);
  //   const [username, setUsername] = useState("Suhel");

  //   return (
  //     <div>
  //       {/* <h1>{counter}</h1>
  //       <button
  //         onClick={() => {
  //           setCounter(counter + 1);
  //         }}
  //       >
  //         Increase Counter
  //       </button>
  //           <h4>{username}</h4>
  //           <button onClick={() => {
  //               setUsername("Monu");
  //           }}>Change Name</button> */}

  //     </div>
  //   );

  //   const username = useRef("Suhel");
  //   console.log(username);

  //     return (
  //       <>
  //             <h4>{username.current}</h4>
  //             <button onClick={() => {
  //                 console.log("username changed")
  //                 username.current = "Monu";
  //             }}>Change Name</button>
  //       </>
  //     );

  // userRef
  // string
  // number
  // []
  // {}
  // html element

  // learning : Change of ref does not trigger re-render of html element
  const h1Ref = useRef();
  function handleClick() {
    // console.log(h1Ref);
    console.log(h1Ref.current);
    const h1 = h1Ref.current;
    h1.textContent = "This is new text";
    h1.style.background = "blue";
    console.log(h1);
  }

  // return (
  //   <>
  //     <h1 ref={h1Ref}>Hello There</h1>
  //     <button onClick={handleClick}>Change value</button>
  //   </>
  // );

  return (
    <>
      <ControlledUncontrolled />
    </>
  );
}

export default ExampleUseRef;
