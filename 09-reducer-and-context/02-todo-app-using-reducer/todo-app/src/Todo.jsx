import React from "react";

function Todo({ id, title, completed, dispatch }) {
  const onDelete = ()=>{
    console.log("first")
    dispatch({type : "DELETE_TODO", payload: {id:id}});
  }
  function onToggle() {
    dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
  }
  return (
    <div>
      <li className="todo" >
        <span className={`todo-title ${completed ? "completed" : ""}`}>
          {title}
        </span>
        <div>
          <input
            type="checkbox"
            name="completed"
            className="todo-checkbox"
            checked={completed}
            onChange={() => onToggle(id)}
          />
          <button
            className="delete-todo-button"
            onClick={() => onDelete(id)}
          >
            x
          </button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
