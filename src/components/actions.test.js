import { changeName, changeGreeting } from './actions';
import { GREETING_CHANGE, NAME_CHANGE } from './reducers';

it('changes a name', () => {
  const name = { name: 'Jay' };

  const { type, payload } = changeName(name);
  expect(type).toBe(NAME_CHANGE);
  expect(payload).toEqual(name);
});

it('changes a greeting', () => {
  const greeting = { greeting: 'Hey' };

  const { type, payload } = changeGreeting(greeting);
  expect(type).toBe(GREETING_CHANGE);
  expect(payload).toEqual(greeting);
});