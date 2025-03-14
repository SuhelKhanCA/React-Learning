import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';


export const AuthContext = createContext();

function AuthProvider({ children }) {
    
    const [auth, setAuth] = useState({
    //   username: "suhel",
      email: "s@s.com",
    });

  return (
    <div>
      <AuthContext.Provider
        value={{
          auth: auth,
          setAuth: setAuth,
        }}
          >
              {/* App -> children */}
              {children} 
      </AuthContext.Provider>
    </div>
  );
}

export function useAuth() {
    return useContext(AuthContext)
}

export default AuthProvider;