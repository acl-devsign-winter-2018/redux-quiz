import { GREETING_CHANGE, NAME_CHANGE } from './reducers';
export const stringAction = ACTION => payload => {
  return ({
    type: ACTION,
    payload
  });
};

export const changeGreeting = stringAction(GREETING_CHANGE);
export const changeName = stringAction(NAME_CHANGE);