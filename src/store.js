import { createStore, combineReducers } from 'redux';
import { name, greeting } from './components/reducers';


const reducer = combineReducers({
  name,
  greeting
});


const store = createStore(
  reducer,
);

export default store;