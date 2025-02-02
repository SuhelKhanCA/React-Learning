import { useState } from "react";
import "./App.css";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Suhel", lastName: "Khan", age: 22 },
    { id: 2, firstName: "John", lastName: "Doe", age: 12 },
    { id: 3, firstName: "Kumar", lastName: "Singh", age: 34 },
    { id: 4, firstName: "Asjad", lastName: "Ali", age: 23 },
    { id: 5, firstName: "Sarim", lastName: "Bhai", age: 24 },
  ]);
  return (
    <>
      <div>
        <h1>State Example 1</h1>
        <Users users={users} />
      </div>
    </>
  );
}

export default App;
