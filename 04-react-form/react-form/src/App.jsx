import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <div>
        <h1>Form Basics</h1>
        <form>
          <div>
            <label htmlFor="username">UserName</label> 
            <input type="text" id="username" value={username} onChange={(e) => {
              setUsername(e.target.value);
            } } />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
