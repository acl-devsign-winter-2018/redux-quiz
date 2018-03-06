import { greeting, UPDATE_GREETING } from './controlsReducer';

// const testGreeting = {
//   greeting: "hello"
// };

it('default greeting is hello', () => {
  const state = greeting(undefined, {});
  expect(state).toEqual([]);
});
