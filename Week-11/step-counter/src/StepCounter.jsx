import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// action creators
const addStep = () => ({
  type: 'ADD_STEPS',
});

const resetStep = () => ({
  type: 'RESET_STEPS',
});

const StepCounter = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.steps);

  console.log(steps);

  const handleAddStep = () => {
    dispatch(addStep());
  };

  const handleResetSteps = () => {
    dispatch(resetStep());
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p>You have walked {steps} steps.</p>
      <button onClick={handleAddStep}>Add Step</button>
      <button onClick={handleResetSteps}>Reset Steps</button>
    </div>
  );
};

export default StepCounter;
