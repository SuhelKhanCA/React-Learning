import React from 'react'

function Greeting({onClick}) { // receiving that props
  return (
      <div className="greeting">
          <h2 onClick={onClick}>Hi there</h2>
    </div>
  )
}

export default Greeting;