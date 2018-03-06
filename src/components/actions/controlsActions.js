import { UPDATE_GREETING } from '../reducers/controlsReducer';

export function updateGreeting(control)
{
  return dispatch => {
    const action = {
      type: UPDATE_GREETING,
      payload: control
    };
    dispatch(action);
  };
}