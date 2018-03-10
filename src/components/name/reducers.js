export const NAME_CHANGE = 'NAME_CHANGE';
export const NAME_LOAD = 'NAME_LOAD';

export function name(state = '', { type, payload }) {
  switch (type) {

    case NAME_LOAD: 
      return state;

    case NAME_CHANGE:
      return payload;
  }
}