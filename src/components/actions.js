import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export function updateGreeting(greeting){
  return {
    type: GREETING_CHANGE,
    payload: greeting
  };
}

export function updateName(name){
  return {
    type: NAME_CHANGE,
    payload: name
  };
}