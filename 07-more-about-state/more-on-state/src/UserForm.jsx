import { useState } from "react";
import DisplayFullName from "./DisplayFullName";
import TestComponent from "./TestComponent";
function UserForm() {
    console.log("UserForm rendered");
  const [firstName, setFirstName] = useState("Mohit");
    const [lastName, setlastName] = useState("");
    const fullName = firstName + lastName;
  return (
    <div>
      <form>
        <h1>Form</h1>
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
        </div>
        <h2>User Details</h2>
        <div>
          <p>FirstName : {firstName}</p>
          <p>LastName : {lastName}</p>
          <p>
            <DisplayFullName fullName={fullName} />
          </p>
              </div>
              <div>
                  <TestComponent />
              </div>
      </form>
    </div>
  );
}

export default UserForm;
