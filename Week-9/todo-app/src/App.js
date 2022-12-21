import { useState } from 'react';
import AddToDo from './components/AddToDo';
import Todo from './components/Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'This is a sample todo 1',
      isDone: false,
    },
    {
      text: 'This is a sample todo 2',
      isDone: true,
    },
    {
      text: 'This is a sample todo 3',
      isDone: false,
    },
    {
      text: 'This is a sample todo 4',
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [{ text }, ...todos];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    console.log('mark');
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1 className='app__title' tabIndex={0} aria-label='title'>
        Todo Manager
      </h1>
      <AddToDo onAdd={addTodo} />
      <div className='list-container'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
