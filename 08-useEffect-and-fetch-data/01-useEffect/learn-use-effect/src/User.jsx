import React from "react";

function User({ id, name, username, email, phone, address }) {
  return (
    <div className="user-div">
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>username:{username}</p>
      <p>email : {email}</p>
      <p>phone: {phone}</p>
      <p>address.city : {address.city}</p>
    </div>
  );
}

export default User;
