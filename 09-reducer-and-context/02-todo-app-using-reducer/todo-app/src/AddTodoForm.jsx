import React, { useState } from 'react'

function AddTodoForm({dispatch}) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    console.log("Form submitted")
    e.preventDefault();
    const newTodo = {
      title: title,
      completed: false,
      id : crypto.randomUUID()
    }
    dispatch({ type: "ADD_TODO", payload: {newTodo} });
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

export default AddTodoForm