import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please fill input", { autoClose: 2000 });
      // toast.info
      // toast.warning
      // toast....
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  }
  return (
    <form className="todo-form">
      <input
        className="todo-form-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
      />
      <button className="todo-form-btn" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
