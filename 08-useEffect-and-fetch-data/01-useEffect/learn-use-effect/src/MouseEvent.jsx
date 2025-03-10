import React, { useEffect, useState } from 'react'

function MouseEvent() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // event listener wala fxn
    const handleMouseMove = (e) => {
          console.log({ x: e.clientX, y: e.clientY });
          setMousePos({ x: e.clientX, y: e.clientY });
    };
    // useEffect
    useEffect(() => {
        // component unmount hone k bad v eventListener chlta rhega
        // document.addEventListener("mousemove", (e) => {
        //   console.log({ x: e.clientX, y: e.clientY });
        //   setMousePos({ x: e.clientX, y: e.clientY });
        // });

        // Sol -> cleanup fxn
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);
  return (
      <div>
          <h1>x : { mousePos.x }</h1>
          <h1>x : { mousePos.y }</h1>
    </div>
  )
}

export default MouseEvent;