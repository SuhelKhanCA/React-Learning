import React from "react";
import styles from "./Greetings2.module.css";
import "./Greetings.css";

function Greetings() {
  //   const name = "Suhel";
  const isDark = true;

  const fName = (name) => name.toUpperCase();
  const cssStyles = {
    backgroundColor: "lightblue",
    fontFamily: "sans-serif",
  };
  return (
    <>
      {/* <h1 className={isDark ? "bg-dark" : null}>Hello, {fName("Suhel")}</h1> */}
      <h1 className={isDark && "bg-dark"}>Hello, {fName("Suhel")}</h1>
      <h1 className={`container bg-dark`}>Hello, {fName("Ali")}</h1>

      {/* CSS Modules */}
      <h1 className={styles.container}>Hello, {fName("Ali")}</h1>
      <h1 className={isDark ? "bg-dark" : ""}>Hello, {fName("Suhel")}</h1>
      <h1 className={`container ${isDark && "bg-dark"}`}>
        Hello, {fName("Ali")}
      </h1>
      <h1 style={cssStyles}>Hello, {fName("Khan")}</h1>
      <h1
        style={{
          backgroundColor: "lightgreen",
          fontFamily: "sans-serif",
        }}
      >
        Hello, {fName("Alig")}
      </h1>
      <div className="bg-dark">Greetings...! from Greetings component</div>
    </>
  );
}

export default Greetings;
