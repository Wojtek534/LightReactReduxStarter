import {combineReducers} from 'redux';
import data from './dataReducer';

// Combine all reducers in app
const rootReducer = combineReducers({
  data: data
});
export default rootReducer;
