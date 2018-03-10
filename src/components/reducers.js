export const GREETING_CHANGE = 'GREETING_CHANGE';
export const NAME_CHANGE = 'NAME_CHANGE';

export function tag( state = [], { type, payload }) {
  switch(type) {
    case GREETING_CHANGE:
      return [
        ...state,
        payload
      ];

    case NAME_CHANGE:
      return [
        ...state,
        payload
      ];
    
    default:
      return state;
  }
}