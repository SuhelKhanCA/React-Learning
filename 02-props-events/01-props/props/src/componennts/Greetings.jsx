import React from "react";
import ShowFullName from "./ShowFullName";

function Greetings(props) {
  // const firstName = props.firstName;
  // const lastName = props.lastName;
  // const { firstName, lastName } = props;
    
//   return <ShowFullName firstName={firstName} lastName={lastName} />;
  return <ShowFullName {...props}  />;
}

export default Greetings;
