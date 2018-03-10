import { GREETING_LOAD, GREETING_CHANGE  } from './reducers';

export function changeGreeting(newGreet) {
  return {
    type: GREETING_CHANGE,
    payload: newGreet
  };
}
