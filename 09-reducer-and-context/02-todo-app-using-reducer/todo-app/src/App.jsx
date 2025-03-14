import { useState } from "react";
import { useReducer } from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";
import { createContext } from "react";

// adding context to Todo-app

export const TodosContext = createContext();


function reducer(todos, action) {
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo;
      }
    });
  }
  if (action.type === "ADD_TODO") {
    return [...todos, { ...action.payload.newTodo }];
  }
  return todos;
}

function App() {
  const initialTodos = [
    { id: "1", title: "teach Student", completed: true },
    { id: "2", title: "Go to gym", completed: false },
    { id: "3", title: "Code and code", completed: false },
    { id: "4", title: "edit todos", completed: true },
    { id: "5", title: "Play guitar", completed: false },
  ];
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodosContext.Provider value={{
      dispatch: dispatch,
      todos: todos,
    }}>
      <>
        <h1 className="heading">Todo List</h1>
        {/* <AddTodoForm dispatch={dispatch} /> */}
        <AddTodoForm />
        {/* <Todos todos={todos} dispatch={dispatch} /> */}
        <Todos/>
      </>
    </TodosContext.Provider>
  );
}

export default App;
