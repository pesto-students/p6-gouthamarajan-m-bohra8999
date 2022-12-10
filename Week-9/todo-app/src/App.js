import { useState } from 'react';
import { Card } from 'react-bootstrap';
import FormTodo from './components/FormTodo';
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
    const newTodos = [...todos, { text }];
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
      <div className='container'>
        <h1 className='text-center mb-4'>Todo Manager</h1>
        <FormTodo addTodo={addTodo} />
        <div className='todoList'>
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body>
                <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
