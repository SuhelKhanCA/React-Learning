import Greetings from "./componennts/Greetings";
import "./App.css";

const Users1 = ["User1", "User2"];
const Users = { hobby: "bikes", like: "Song" };

function App() {

  // return (
  //   <>
  //     <h1>Hello world! </h1>
  //     <Greetings firstName="Suhel" lastName="Khan" fullName="Mr XYZ" />
     
  //   </>
  // );
  return (
    <>
      <Greetings firstName="Suhel"><h1>This is the content of children props</h1></Greetings>
    </>
  );
}

export default App;
