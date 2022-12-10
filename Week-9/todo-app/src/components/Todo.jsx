import { Button } from 'react-bootstrap';

export default function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className='todo'>
      <span className={`todo-item ${todo.isDone ? 'checked' : 'unchecked'}`}>{todo.text}</span>
      <div>
        <Button variant='outline-success' onClick={() => markTodo(index)}>
          ✓
        </Button>{' '}
        <Button variant='outline-danger' onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}
