import { name, NAME_CHANGE, NAME_LOAD } from './reducers';

it('returns default greeting', () => {
  const state = name(undefined, { type: NAME_LOAD });
  expect(state).toBe('');
});

it('changes name', () => {
  const state = name(undefined, { type: NAME_CHANGE, payload: 'Imelda' });
  expect(state).toBe('Imelda');
});