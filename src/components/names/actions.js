import { NAME_CHANGE } from './reducers';
import shortid from 'shortid';

export function changeName(name) {
  name.id = shortid();

  return {
    type: NAME_CHANGE,
    payload: name
  };
}