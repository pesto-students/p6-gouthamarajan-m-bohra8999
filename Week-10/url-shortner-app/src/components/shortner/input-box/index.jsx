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
      <div className='input-box'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClick(userInput);
          }}
          className='input-box__form'
        >
          <input
            type='text'
            placeholder='Enter link to be shortened'
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            ref={inputRef}
            className='input-box__field'
          />
          <button className='input-box__action-btn' type='submit'>
            SHORTEN IT!
          </button>
          {errorMessage && <div className='input-box__error'>{errorMessage}</div>}
        </form>
      </div>
    </>
  );
};

export default InputBox;
