import { useState } from "react";

import "./App.css";

function App() {
  const [gender, setGender] = useState("male");

  return (
    <>
      <h1>Radio Buttons</h1>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        checked={gender === "male"}
        onChange={() => {
          setGender("male");
        }}
      />
      <br />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        checked={gender === "female"}
        onChange={() => {
          setGender("female");
        }}
      />
      <br />
      <label htmlFor="other">Other</label>
      <input
        type="radio"
        checked={gender === "other"}
        onChange={() => {
          setGender("other");
        }}
      />
    </>
  );
}

export default App;
