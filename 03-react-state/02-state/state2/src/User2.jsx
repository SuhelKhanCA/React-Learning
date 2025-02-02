import { useState } from "react";

function User({ userDetails, increaseAge, deleteUser }) {
    
//   const [age, setAge] = useState(userDetails.age);
  //   function increaseAge() {
  //     console.log(userDetails.id);
  //     setAge(age + 1);
  //   }
  return (
    <div className="user">
      <p>First Name : {userDetails.firstName}</p>
      <p>Last Name : {userDetails.lastName}</p>
      <p>Age : {userDetails.age}</p>
      <button
        onClick={() => {
          increaseAge(userDetails.id);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          deleteUser(userDetails.id);
        }}
      >
        Delete User
      </button>
    </div>
  );
}

export default User;
