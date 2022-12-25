import { legacy_createStore as createStore } from 'redux';

const initialState = {
  isLightOn: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isLightOn: !state.isLightOn,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
