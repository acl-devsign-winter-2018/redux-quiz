import { GREETING_CHANGE, NAME_CHANGE } from './reducers';
import greetingChange from './reducers';

export function greeting (greeting) {

  return (dispatch => { 
    return add(greeting)
      .then(greeting => {
        const action = {
          type: GREETING_CHANGE,
          payload: greetingChange
        };
      });

      export function nameChange(greeting) {
        
      }

  })
}
