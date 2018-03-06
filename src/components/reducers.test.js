import { greeting, name, GREETING_CHANGE, NAME_CHANGE } from './reducers';

it('default empty object', () => {
  const state = greeting(undefined, {});
  expect(state).toEqual({});
});

it('updates a greeting', () => {
  const state = greeting({}, { type: GREETING_CHANGE, payload: { greeting: 'yo!' } });
  expect(state).toEqual({ greeting: 'yo!' });
});

it('updates a name', () => {
  const state = name({}, { type: NAME_CHANGE, payload: { name: 'Jay' } });
  expect(state).toEqual({ name: 'Jay' });
});