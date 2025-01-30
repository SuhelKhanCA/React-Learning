import { useState } from "react";
import { v4 as uuid } from "uuid";
function ArrayStateExample() {
  const [fruits, setFruits] = useState(["Mango", "Apple"]);

  // Don't do this mistake
  const addFruit = () => {
    // setFruits(fruits.push("newFruit")); // not mutable behaviour
  };
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={uuid()}>{fruit}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          //   setFruits([...fruits, "newFruits"]);
          setFruits((previousState) => { // good practice
            return [...previousState, "newFruit"];
          });
        }}
      >
        Add Fruits
      </button>
      {/* <button
        onClick={addFruit}
      >
        Add Fruits Error
      </button> */}
    </>
  );
}

export default ArrayStateExample;
