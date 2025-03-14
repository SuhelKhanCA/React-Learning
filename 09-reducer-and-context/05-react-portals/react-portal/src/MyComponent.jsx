import React from "react";
import { createPortal } from "react-dom";

function MyComponent() {
    //   return createPortal(<div>MyComponent</div>,  document.getElementById("new-root"));
    return createPortal(
        <>
        <h1>My Component from portal</h1>
        </>,
      document.getElementById("new-root")
    );
}

export default MyComponent;
