import React, { useRef, useEffect } from "react";

function UserForm() {
    const usernameRef = useRef();
    useEffect(() => {
        usernameRef.current.focus();
    }, []);
  return (
    <div>
      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="username"
          ref={usernameRef}
        />
      </form>
    </div>
  );
}

export default UserForm;
