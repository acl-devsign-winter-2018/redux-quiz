import { changeGreeting } from './actions';
import { GREETING_CHANGE } from './reducers';

it('fires an action to change greeting', () => {
  const action = changeGreeting('Wassup');
  expect(action).toEqual({
    type: GREETING_CHANGE,
    payload: 'Wassup'
  });
});