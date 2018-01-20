import { UPDATE } from '../actions/TimerActions';

const initialState = {
  change: [],
  slope: 0,
};

export default function values(state = initialState, action) {
  switch (action.type) {
    case UPDATE: {
      const change = Object.keys(action.data).map(currency =>
        ({ currency, value: action.data[currency] }),
      );
      let slope = state.slope;
      if (state.change.length > 0 && change[0].value !== state.change[0].value) {
        slope = (Math.atan((change[0].value - state.change[0].value)) * 180) / Math.PI;
      }
      return Object.assign({}, state, { change, slope });
    }
    default:
      return state;
  }
}
