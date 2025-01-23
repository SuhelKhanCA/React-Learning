import "./App.css";
import User from "./components/User";

const Users = [
  { id: 1, firstName: "Suhel", lastName: "Khan" },
  { id: 2, firstName: "Anjali", lastName: "Verma" },
  { id: 3, firstName: "Ravish", lastName: "Kumar" },
  { id: 4, firstName: "Shashi", lastName: "Tharoor" },
];

function App() {
  // map method for rendering list
  return (
    <>
      <h1>Hello World</h1>
      {/* <User firstName={Users[0].firstName} lastName={Users[0].lastName} />
      <User firstName={Users[1].firstName} lastName={Users[1].lastName} />
      <User firstName={Users[2].firstName} lastName={Users[2].lastName} />
      <User firstName={Users[3].firstName} lastName={Users[3].lastName} /> */}

      {/*map method */}
      {/* {Users.map((user) => {
        return <User firstName={user.firstName} lastName={user.lastName} />;
      })} */}

      {/* =======Short Syntax=========  */}
      {/* {Users.map((user) => <User firstName={user.firstName} lastName={ user.lastName } />)} */}

      {/* ======== return user directly======== */}
      {Users.map((user) => (
        <User {...user} key={user.id} />
      ))}

      {/* ======The below is only good for static list======== */}
      {/* {Users.map((user index) => (
        <User {...user} key={index} />
      ))} */} 
    </>
  );
}

export default App;
