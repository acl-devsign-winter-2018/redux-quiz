import { createStore } from 'redux';
import { tag } from './components/reducers';

const store = createStore(
  tag,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;