import { names, NAME_CHANGE, } from './reducers';

it('Has a default of empty array', () => {
  const state = names(undefined, {});
  expect(state).toEqual([]);
});

const nameToChange = {
  id: 1,
  text: 'First Name'
};

it('Add a name', () => {
  const state = names([], { type: NAME_CHANGE, payload: nameToChange });
  expect(state).toEqual([nameToChange]);
});