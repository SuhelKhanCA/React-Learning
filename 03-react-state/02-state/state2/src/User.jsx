import React from 'react'

function User({userDetails}) {
  return (
    <div className="user">
      <p>First Name : {userDetails.firstName}</p>
      <p>Last Name : {userDetails.lastName}</p>
      <p>Age : {userDetails.age}</p>
    </div>
  );
}

export default User;