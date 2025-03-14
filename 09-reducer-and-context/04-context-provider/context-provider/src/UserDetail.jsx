import React from 'react'
import { useContext } from 'react';
// import { AuthContext } from './main';
import { AuthContext } from './AuthProvider';

import { useAuth } from './AuthProvider';

function UserDetail() {
    // console.log(useAuth())
    // const {username, email} = useContext(AuthContext);
    // const {username, email} = useContext(AuthContext);

    // const { username, email } = useAuth();
    const { auth, setAuth } = useAuth();
    return (
      <div>
          <h2>User Detail</h2>
          <p>name : {auth.username}</p>
          <p>email : {auth.email}</p>
            <button onClick={() => {
                setAuth({});
            }}>Logout</button>
    </div>
  )
}

export default UserDetail;