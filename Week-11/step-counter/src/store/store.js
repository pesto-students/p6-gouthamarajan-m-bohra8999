import { legacy_createStore as createStore } from 'redux';

const initialState = {
  steps: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEPS':
      return {
        ...state,
        steps: state.steps + 1,
      };
    case 'RESET_STEPS':
      return {
        ...state,
        steps: 0,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
