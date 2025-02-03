import { useState } from "react";
 import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn gitar", completed: false },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Go to Gym", completed: true },
    { id: 4, title: "Learn Next", completed: false },
  ]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  function toggleComplete(id) {
    console.log(id, "Toggle completed");

    // Simple Logic
    // const newTodos = [];
    // for (const todo of todos) {
    //   if (todo.id === id) {
    //     newTodos.push({ ...todo, completed: !todo.completed });
    //   } else {
    //     newTodos.push(todo);
    //   }
    //   setTodos(newTodos);
    // }

    setTodos((previousState) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }
  // Delete Todo
  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        <h1 className="heading">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default App;
