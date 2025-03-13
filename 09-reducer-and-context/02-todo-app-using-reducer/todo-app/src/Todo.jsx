import React from "react";

function Todo({ id, title, completed }) {
  return (
    <div>
      <li className="todo" data-id={id}>
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
