import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { messages } from './components/controls/reducer';
// import {  } from './components/display/reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  messages,
  // #
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  ));

export default store;