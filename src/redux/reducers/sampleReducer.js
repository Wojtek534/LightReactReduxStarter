import * as types from '../actions/actionTypes';

// Reducer for sample
export default function sampleReducer(state = [], action) {
  debugger;
  switch (action.type) {
    case types.LOAD_SAMPLE_SUCCESS:
      return action.sampleStore;
    case types.ADD_SAMPLE_SUCCESS:
      return [
        ...state,
        // object.assign copy values from object (or objects) and return new one
        Object.assign({}, action.data)
      ];

    default:
      return state;
  }
};
