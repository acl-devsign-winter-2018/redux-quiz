import { changeName } from './actions';
import { NAME_CHANGE } from './reducers';

it('fires an action to change name', () => {
  const action = changeName('Imelda');
  expect(action).toEqual({
    type: NAME_CHANGE,
    payload: 'Imelda'
  });
});