import { useTodos } from "./contexts/TodosProvider";

function Todo({ completed, id, title }) {
    const { handleDelete, handleToggle } = useTodos();
  return (
    <div>
      <li className="todo">
        <span className={`todo-title ${completed ? "completed" : ""}`}>
          {title}
        </span>
        <div className="toggle-delete">
          <input
            type="checkbox"
            name="completed"
            className="todo-checkbox"
            checked={completed}
            onChange={() => handleToggle(id)}
          />
          <button
            className="delete-todo-button"
            onClick={() => handleDelete(id)}
          >
            ×
          </button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
