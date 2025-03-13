import React from "react";
import Todo from "./Todo";

function Todos({todos}) {
  return (
    <>
      <ul className="todos container">
        {todos.map((todo) => (
          <Todo {...todo} id={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default Todos;
