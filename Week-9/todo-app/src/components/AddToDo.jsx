import { useEffect, useRef, useState } from 'react';

export default function AddToDo({ onAdd }) {
  const [value, setValue] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onAdd(value);
    setValue('');
  };

  return (
    <div className='add-todo'>
      <form className='add-todo__form' onSubmit={handleSubmit}>
        <input
          id='addtodo'
          type='text'
          className='add-todo__input'
          aria-label='Add Todo'
          aria-autocomplete='none'
          aria-required='true'
          value={value}
          ref={inputEl}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Write todo here...'
        />
        <button className='add-todo__btn btn--primary' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}
