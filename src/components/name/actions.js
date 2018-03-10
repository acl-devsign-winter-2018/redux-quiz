import { NAME_LOAD, NAME_CHANGE  } from './reducers';

export function changeName(newName) {
  return {
    type: NAME_CHANGE,
    payload: newName
  };
}