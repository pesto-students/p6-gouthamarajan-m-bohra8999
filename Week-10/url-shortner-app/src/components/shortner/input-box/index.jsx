import { useEffect, useRef, useState } from 'react';
import './InputBox.css';

const InputBox = ({ onClick, errorMessage }) => {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className='input-box-container'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClick(userInput);
          }}
          className='form'
        >
          <input
            type='text'
            placeholder='Enter link to be shortened'
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            ref={inputRef}
            className='input-field'
          />
          <button className='submit-button' type='submit'>
            Shorten It!
          </button>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
        </form>
      </div>
    </>
  );
};

export default InputBox;
