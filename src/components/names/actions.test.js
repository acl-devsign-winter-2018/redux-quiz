import { changeName } from './actions';
import { NAME_CHANGE } from './reducers';

it('adds the name', () => {
  const { type, payload } = changeName({ text: 'Name' });
  expect(type).toBe(NAME_CHANGE);
  const { text, id } = payload;
  expect(text).toBe('Name');
  expect(id).toBeTruthy();
});
