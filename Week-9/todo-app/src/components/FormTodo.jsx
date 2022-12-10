import { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function FormTodo({ addTodo }) {
  const [value, setValue] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type='text'
          className='input'
          value={value}
          ref={inputEl}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Add new todo'
        />
      </Form.Group>
      <Button variant='primary mb-3 mt-2' type='submit'>
        Submit
      </Button>
    </Form>
  );
}
