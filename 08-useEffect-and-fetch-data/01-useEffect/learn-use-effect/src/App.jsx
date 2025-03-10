import { useEffect, useState } from "react";
import "./App.css";
import ExampleUseEffect from "./ExampleUseEffect";
import FetchDataExample from "./FetchDataExample";
import FetchData from "./FetchData";
import CleanupFunctionDemo from "./CleanupFunctionDemo";

import MouseEvent from "./MouseEvent";

const URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [isShow, setIsShow] = useState(true);

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  return (
    <>
      {/* <ExampleUseEffect/> */}
      {/* <FetchData/> */}
      {/* <FetchDataExample  /> */}

      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={isShow}
        onChange={()=> setIsShow(prevVal => !prevVal)}
      />
      {/*{isShow && <CleanupFunctionDemo />} */}
      
      {isShow && <FetchDataExample  />}
    </>
  );

  // return <>
  //   <label htmlFor="showComponent">Show Component</label>
  //     <input
  //       type="checkbox"
  //       name="showComponent"
  //       id="showComponent"
  //       checked={isShow}
  //       onChange={()=> setIsShow(prevVal => !prevVal)}
  //     />
  //     {isShow && <MouseEvent />}
  // </>;
}

export default App;
