import { useState } from "react";

function ObjectStateExample() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Suhel",
    lastName: "Khan",
    age: 22,
  });
  return (
    <div>
      <h1>This is Object Example</h1>
      <p>firstName : {person.firstName}</p>
      <p>lastName : {person.lastName}</p>
      <p>age : {person.age}</p>
      <button
        onClick={() => {
          setPerson((previousState) => {
            return { ...previousState, age: previousState.age + 1 };
          });
        }}
      >
        Increase Age
      </button>
    </div>
  );
}

export default ObjectStateExample;
