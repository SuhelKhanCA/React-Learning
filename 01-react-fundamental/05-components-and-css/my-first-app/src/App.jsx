import React from 'react';

// import all the compenents here
import Hello from "./components/Hello";
import Greetings from "./components/Greetings";

function App() {
    return (
        <>
            <h1>Welcome to My First App</h1>
            <p>This is a simple React component.</p>
            <Hello></Hello>
            <Greetings></Greetings>
        </>
    );
}

export default App;