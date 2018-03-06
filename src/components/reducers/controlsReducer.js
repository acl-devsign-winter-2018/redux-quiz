export const UPDATE_GREETING = 'UPDATE_GREETING';

export function greeting(state = [], { type, payload }) {
  switch (type) {
    case UPDATE_GREETING:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}