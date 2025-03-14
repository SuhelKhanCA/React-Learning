import React from 'react'
import UserDetail from './UserDetail';
import { useAuth } from './AuthProvider';
function UserProfile() {
    function handleLogin() {
        setAuth({ username: "khan", email: "khan@l.com" });
    }
    const { auth, setAuth } = useAuth();
  return (
    <div>
          <h2>UserProfile</h2>
        {auth.username ? <UserDetail/> : <button onClick={handleLogin}>Login</button>}
    </div>
  );
}

export default UserProfile;