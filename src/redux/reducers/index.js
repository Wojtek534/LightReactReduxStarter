import {combineReducers} from 'redux';
import data from './dataReducer';

const rootReducer = combineReducers({
  data: data
});
export default rootReducer;
