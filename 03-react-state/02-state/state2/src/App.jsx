import { useState } from "react";
import "./App.css";
import Users from "./Users2";

function App() {
  // console.log("App rendered");
  const [users, setUsers] = useState([
    { id: 1, firstName: "Suhel", lastName: "Khan", age: 22 },
    { id: 2, firstName: "John", lastName: "Doe", age: 12 },
    { id: 3, firstName: "Kumar", lastName: "Singh", age: 34 },
    { id: 4, firstName: "Asjad", lastName: "Ali", age: 23 },
    { id: 5, firstName: "Sarim", lastName: "Alig", age: 22 },
    { id: 6, firstName: "Umar", lastName: "Daraz", age: 24 },
  ]);

  // prop drilling
  function increaseAge(id) {
    console.log(id);

    // Define new State for array
    // const newState = [];

    // for (const user of users) {
    //   if (user.id === id) {
    //     newState.push({ ...user, age: user.age + 1 });
    //   } else {
    //     newState.push(user);
    //   }
    // }
    // console.log(newState);
    // // use setUsers
    // setUsers(newState);

    // Better Approach : arrow, map, filter, reduce, find
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  // Deleting User
  function deleteUser(id) {
    console.log("Delete user invoked");

    // Define new State for array
    // const newState = [];
    // for (const user of users) {
    //   if (user.id !== id) {
    //     newState.push(user);
    //   }
    // }
    // console.log(newState);
    // // use setUsers
    // setUsers(newState);

    // setUsers((prevState) => {
    //   return prevState.filter((user) => user.id !== id);
    // });
    setUsers((prevState) => prevState.filter((user) => user.id !==id));
  }

  return (
    <>
      <div>
        <h1>State Example 1</h1>
        <Users
          users={users}
          increaseAge={increaseAge}
          deleteUser={deleteUser}
        />
      </div>
    </>
  );
}

export default App;
