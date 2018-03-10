import { GREETING_CHANGE, NAME_CHANGE } from './reducers';


const greeting = {
  id: 'greeting'
};


it('Add a greeting', () => {
  const state = greeting([], { type: GREETING_CHANGE, payload: changeGreeting });
  expect(state).toEqual([changeGreeting]);
});
