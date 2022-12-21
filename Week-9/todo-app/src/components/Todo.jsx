export default function Todo(props) {
  const { todo, index, markTodo, removeTodo } = props;
  return (
    <div className='todo-item'>
      <span
        tabIndex='0'
        role='navigation'
        aria-label='todo item'
        className={todo.isDone ? 'todo-item__checked' : 'todo-item__unchecked'}
      >
        {todo.text}
      </span>
      <div className='todo-item__btn-container'>
        <button className='todo-item__btn btn--primary' onClick={() => markTodo(index)}>
          {todo.isDone ? 'Uncheck' : 'Check'}
        </button>
        <button className='todo-item__btn btn--secondary' onClick={() => removeTodo(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}
