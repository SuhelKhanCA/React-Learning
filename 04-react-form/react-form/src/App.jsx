import { useState } from "react";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    console.log("Hello", username);
    console.log("Form Submitted");
  }
  return (
    <>
      <div className="form-container">
        <h1>Form Basics</h1>
        <form>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
