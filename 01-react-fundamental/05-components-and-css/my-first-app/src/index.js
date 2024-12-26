import React from 'react';
import ReactDOM from 'react-dom/client';
// import Hello from './Hello';
// import { Hello2 } from './Hello';


import App from './App';


// function HelloWorld() {
//   return (
//     <>
//       <h1>Hello World ...!</h1>
//       <p>This is paragraph !</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
