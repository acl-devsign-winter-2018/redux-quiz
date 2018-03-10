import { tag, GREETING_CHANGE, NAME_CHANGE } from './reducers';

it('Updates a greeting', () => {
  const updated = {
    id: 1,
    text: 'greeting updated'
  };
  const state = tag([], { type: GREETING_CHANGE, payload: updated });
  expect(state).toEqual([{ ...updated }]);
});

it('Updates name', () => {
  const updated = {
    id: 2,
    text: 'name updated'
  };
  const state = tag([], { type: NAME_CHANGE, payload: updated });
  expect(state).toEqual([{ ...updated }]);
});
