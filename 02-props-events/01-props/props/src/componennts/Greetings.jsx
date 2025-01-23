import React from "react";

function Greetings({ firstName, lastName, age, users }) {
  // const firstName = props.firstName;
  // const lastName = props.lastName;
  // const { firstName, lastName } = props;
  return (
    <div>
      Greetings {firstName} {lastName} {age} {users[0]}
    </div>
  );
}

export default Greetings;
