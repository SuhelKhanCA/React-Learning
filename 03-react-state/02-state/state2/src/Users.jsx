// Example : 1

import React from "react";
import User from "./User";

function Users({ users }) {
  return (
    <div>
      <h2>Users</h2>
      {/* {users.map((user) => {
        return (
          <div>
            <p>First Name : {user.firstName}</p>
          </div>
        );
      })}; */}
          
      {/* {users.map((user) => (
        <div className="user">
          <p>First Name : {user.firstName}</p>
          <p>Last Name : {user.lastName}</p>
          <p>Age : {user.age}</p>
        </div>
      ))} */}
          
          {users.map((user) => {
              return <User userDetails={user} key={user.id} />;
          })}
    </div>
  );
}

export default Users;
