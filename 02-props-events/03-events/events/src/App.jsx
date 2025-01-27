import "./App.css";
import Greeting from "./components/Greeting";

function handleClick(e) {
  console.log(e); // browser passes 'e' : event object
  console.log(e.target);
  e.target.textContent = "You clicked mee!";
  console.log("You click me");
}

function handleClickMe2(firstName, lastName) {
  console.log("You click second fxn");
  console.log(firstName, lastName);
}

// wrapper fxn
function wrapperFunction() {
  handleClickMe2("Suhel", "Khan");
}

// obClick : works only on HTML elements --> h1, p, button, etc
function App() {
  return (
    <>
      <h1>Events</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <button onClick={wrapperFunction}>Click Me 2</button>
      <br />
      <button
        onClick={(e) => {
          console.log(e.target);
          e.target.textContent = "You clicked me 3!";
          handleClickMe2("Suhel", "Khan");
        }}
      >
        Click Me 3
      </button>

      <Greeting onClick={handleClick} />  { /* will receive 'onClick' as a props */}
    </>
  );
}

export default App;
