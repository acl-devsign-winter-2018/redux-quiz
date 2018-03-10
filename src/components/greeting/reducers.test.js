import { greeting, GREETING_CHANGE, GREETING_LOAD } from './reducers';

it('returns default greeting', () => {
  const state = greeting(undefined, { type: GREETING_LOAD });
  expect(state).toBe('Hello');
});

it('changes greeting', () => {
  const state = greeting(undefined, { type: GREETING_CHANGE, payload: 'Wassup' });
  expect(state).toBe('Wassup');
});