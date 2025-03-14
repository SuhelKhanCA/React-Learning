import { useState } from "react";
import { useTodos } from "./contexts/TodosProvider";
function AddTodoForm() {
  const { addNewTodo } = useTodos();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("type something ...");
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: crypto.randomUUID(),
    };
    // console.log(newTodo);
    addNewTodo(newTodo);
    setTitle("");
  }
  return (
    <>
      <form id="form" className="form container" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo-title-input"
          className="todo-title-input"
          placeholder="Todo title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit" className="todo-form-button">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodoForm;
