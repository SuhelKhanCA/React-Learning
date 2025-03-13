import { useState } from 'react'
import { useReducer } from 'react';
import AddTodoForm from './AddTodoForm';
import Todos from './Todos';



function reducer(todos, action) {
  return todos;
}

function App() {
  const initialTodos = [
    {id:"1", title: "teach Student", completed: true},
    {id:"2", title: "Go to gym", completed: false},
    {id:"3", title: "Code and code", completed: false},
    {id:"4", title: "edit todos", completed: true},
    {id:"5", title: "Play guitar", completed: false},
  ]
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <h1 className="heading">Todo List</h1>
      <AddTodoForm/>
      <Todos todos={todos} />
    </>
  );
}

export default App
