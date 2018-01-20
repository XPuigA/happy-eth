import { UPDATE } from '../actions/TimerActions';

const initialState = {
};

export default function values(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return Object.assign({}, state, { ...action.data });
    default:
      return state;
  }
}
