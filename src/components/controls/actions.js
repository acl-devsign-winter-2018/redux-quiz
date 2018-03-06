import { MESSAGE_ADD } from './reducer';

export function addMessage(message) {
  return dispatch => {
    return addedMessage => {
      const action = {
        type: MESSAGE_ADD,
        payload: addedMessage
      };
      dispatch(action);
    };
  };
}