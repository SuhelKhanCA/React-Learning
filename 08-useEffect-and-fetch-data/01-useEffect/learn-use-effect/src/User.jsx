import React from 'react'

function User({id, name, username, email, phone, address}) {
  return (
      <div className='user-div'>
          <p>id</p>
          <p>name</p>
          <p>username</p>
          <p>email</p>
          <p>phone</p>
          <p>address.city</p>
          
    </div>
  )
}

export default User;