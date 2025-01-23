import Greetings from "./componennts/Greetings";
import "./App.css";

const Users1 = ["User1", "User2"];
const Users = { hobby: "bikes", like: "Song" };

function App() {

  return (
    <>
      <h1>Hello world! </h1>
      <Greetings firstName="Suhel" lastName="Khan" age={21} users={ Users1 } />
      <Greetings firstName="Suhel" lastName="Khan" age={21} users={ Users1 } />
      <Greetings firstName="Suhel" lastName="Khan" age={21} users={ Users1 } />
    </>
  );
}

export default App;
