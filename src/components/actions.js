import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

export function changeName(nameObj) {
  return {
    type: NAME_CHANGE,
    payload: nameObj
  };
}

export function changeGreeting(greetingObj) {
  return {
    type: GREETING_CHANGE,
    payload: greetingObj
  };
}