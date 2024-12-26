import React from 'react';
import ReactDOM from 'react-dom/client';


function Hello() {
  return <h1>Hello World !</h1>
}

// const rootElement = document.getElementById("root");

// ReactDOM.createRoot(rootElement).render(<h1>Suhel Khan</h1>)

// ReactDOM.createRoot(document.getElementById("root")).render(<Hello/>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <h1>Hello World ... !</h1>
  </React.StrictMode>
)
