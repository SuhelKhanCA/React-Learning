import React from "react";
import Todo from "./Todo";

function Todos({todos, dispatch}) {
  return (
    <>
      <ul className="todos container">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
}

export default Todos;
