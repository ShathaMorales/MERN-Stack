import './App.css';
import React, { useState } from 'react';
import ListForm from './components/ListForm';
import ListDisplay from './components/ListDisplay';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { newTodo: newTodo, state: false }]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo, id) => id !== id));
  }

  const checkTodo = (idx) => {
    setTodos(todos.map((todo, id) => {
      console.log(id)
      if (id === idx) {
        return {
          ...todo,
          state: !todo.state
        }

      }
      return todo
    }))
  }

  return (
    <div className="App">
      <ListForm addTodo={addTodo} />
      <ListDisplay todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />
    </div>
  );
}

export default App;
