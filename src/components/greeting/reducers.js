export const GREETING_CHANGE = 'GREETING_CHANGE';
export const GREETING_LOAD = 'GREETING_LOAD';

export function greeting(state = 'Hello', { type, payload }) {
  switch (type) {

    case GREETING_LOAD: 
      return state;

    case GREETING_CHANGE:
      return payload;
  }
}