import { combineReducers } from 'redux';
import values from './ValuesReducer.js';


const MainReducer = combineReducers({
  values,
});

export default MainReducer;
