
export const GREETING_CHANGE = 'GREETING_CHANGE';
export const NAME_CHANGE = 'NAME_CHANGE';

export const stringReducer = (init, ACTION) => (state = init, { type, payload }) => {
  switch(type) {
    case ACTION:
      return payload;
    default:
      return state;
  }
};

export const name = stringReducer('', NAME_CHANGE);

export const greeting = stringReducer('Hello', GREETING_CHANGE);
