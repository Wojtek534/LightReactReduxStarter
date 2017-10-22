import {combineReducers} from 'redux';
import sample from './sampleReducer';

// Combine all reducers in app
const rootReducer = combineReducers({
  sample: sample
});
export default rootReducer;
