import { stringReducer, GREETING_CHANGE } from './reducers';
import { stringAction } from './actions';

describe('reducers', () => {
  const greeting = stringReducer('Hello', GREETING_CHANGE);

  it('inits greeting', () => {
    expect(greeting(undefined, {})).toBe('Hello');
  });

  it('updates greeting', () => {
    const state = greeting('Hello', { type: GREETING_CHANGE, payload: 'Hola' });
    expect(state).toBe('Hola');
  });
});

describe('actions', () => {
  const changeGreeting = stringAction(GREETING_CHANGE);
  it('makes change action', () => {
    const action = changeGreeting('Hola');
    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: 'Hola'
    });
  });
});