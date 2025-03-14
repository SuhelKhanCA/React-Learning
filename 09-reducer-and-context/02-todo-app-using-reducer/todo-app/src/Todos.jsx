import Todo from "./Todo";

import { useTodos } from "./contexts/TodosProvider";
function Todos() {
    const { todos } = useTodos();
  return (
    <>
      <ul className="todos container">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id}/>
        ))}
      </ul>
    </>
  );
}

export default Todos;
