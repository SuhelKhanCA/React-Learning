import React from 'react'

function Greeting({handleClick}) { // receiving that props
  return (
    <div className="greeting">
      <h2 onClick={handleClick}>Hi there</h2>
    </div>
  );
}

export default Greeting;