export const NAME_CHANGE = 'NAME_CHANGE';

export function name(state = [], { type, payload }) {
  switch (type) {
    case NAME_CHANGE:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}