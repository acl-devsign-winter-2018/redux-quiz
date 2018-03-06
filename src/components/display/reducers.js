import { MESSAGE_ADD } from '../controls/reducer';

export function messageCombiner(state = {}, { type, payload }) {
  switch (type) {
    case MESSAGE_ADD:
      return { ...state, payload };
  }
}