import React from 'react'

function AddTodoForm() {
  return (
    <>
      <form id="form" className="form container">
        <input
          type="text"
          id="todo-title-input"
          className="todo-title-input"
          placeholder="Todo title"
        />
        <button type="submit" className="todo-form-button">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodoForm