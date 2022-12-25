import './App.css';
import StepCounter from './StepCounter';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <StepCounter />
    </Provider>
  );
}

export default App;
