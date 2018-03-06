import { name, greeting, GREETING_CHANGE, NAME_CHANGE } from './reducers';

describe('greeting reducers', () =>{

  it('has hello as default', () => {
    const state = greeting(undefined, {});
    expect(state).toEqual('Hello');
  });

  it('greeting changes', () => {
    const state = greeting('', { type: GREETING_CHANGE, payload: 'New Greeting'})
    expect(state).toEqual('New Greeting');
  });

  it('name defaults to empty string', () => {
    const state = name(undefined, {});
    expect(state).toEqual('');
  });

  it('changes name', () => {
    const state = name('Bob', { type: NAME_CHANGE, payload: 'Bill' });
    expect(state).toEqual('Bill');
  });
});