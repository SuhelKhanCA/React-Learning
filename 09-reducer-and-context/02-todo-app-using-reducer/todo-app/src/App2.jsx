import React from 'react'
import AddTodoForm from './AddTodoForm';
import Todos from './Todos';
import TodosProvider from './contexts/TodosProvider';

function App2() {
  return (
      <TodosProvider>
          <AddTodoForm />
          <Todos/>
    </TodosProvider>
  )
}

export default App2;