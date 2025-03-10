import React, { useEffect } from "react";

// fetch data component render
// useEffect(()=> {})
// useEffect(()=> {}, []) : this will be used here
// useEffect(()=> {}, [listItem])

const URL = "https://jsonplaceholder.typicode.com/users";
// promise
// async await


// promises
function FetchData() {
  // Error: Resolved
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  // useEffect hook
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>FetchData</div>;
}

export default FetchData;
