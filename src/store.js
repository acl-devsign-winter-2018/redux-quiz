import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
);

export default store;
