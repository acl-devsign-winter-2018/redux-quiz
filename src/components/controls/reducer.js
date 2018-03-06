export const MESSAGE_ADD = 'MESSAGE_ADD';

export function messages(state = [], {type, payload}) {
  switch(type) {
    case MESSAGE_ADD:
      return [
        ...state,
        payload
      ];

    default:
      return state;
  }
}