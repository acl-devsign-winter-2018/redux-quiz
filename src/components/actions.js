import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export function changeGreeting(greeting) {
  return {
    type: GREETING_CHANGE,
    payload: greeting
  };
}

export function changeName(name) {
  return {
    type: NAME_CHANGE,
    payload: name
  };
}
