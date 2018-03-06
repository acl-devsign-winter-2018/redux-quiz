import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import { greeting, name } from './components/reducers';
import { Provider } from 'react-redux';

const root = combineReducers({ greeting, name });
const store = createStore(root);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);