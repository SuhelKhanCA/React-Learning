import React from 'react'

function ShowCountValue(props) {
    // props.count = 100; // TypeError: Cannot assign to read only property 'count' of object '#<Object>'
    let { count } = props;
    count = 100; // not recommended
  return (
    <div>
      <span>{count}</span>
    </div>
  );
}

export default ShowCountValue;