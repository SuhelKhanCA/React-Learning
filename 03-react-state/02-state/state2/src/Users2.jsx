// Example : 1

import React from "react";
import User from "./User2";

function Users({ users, increaseAge, deleteUser }) {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <User
            userDetails={user}
            key={user.id}
            increaseAge={increaseAge}
            deleteUser={deleteUser}
          />
        );
      })}
    </div>
  );
}

export default Users;
