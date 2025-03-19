import React, { useEffect, useState } from "react";
import useLocatStorage from "./hooks/useLocatStorage";

function BasicForm() {
    // const [firstName, setFirstName] = useState(() => {
    //     return JSON.parse(localStorage.getItem("firstname")) || "";
    // });
    // useEffect(() => {
    //     localStorage.setItem("firstname", JSON.stringify(firstName));
    // }, [firstName])

    const [firstName, setFirstName] = useLocatStorage("firstname", "")
    const [lastName, setLastName] = useLocatStorage("lastname", "")
  return (
    <div>
          <form>
              <label htmlFor="firstname">FirstName</label>
              <input type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => {
                      setFirstName(e.target.value);
                  }}
              />
              <label htmlFor="lastname">LastName</label>
              <input type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => {
                      setLastName(e.target.value);
                  }}
              />
          </form>
          <h1>FirstName : {firstName}</h1>
          <h1>LastName : {lastName}</h1>
    </div>
  );
}

export default BasicForm;
