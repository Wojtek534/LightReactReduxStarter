import * as types from '../actions/actionTypes';

// Reducer for sample
export default function sampleReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_SAMPLE_SUCCESS':
      return action.sampleStore;
    case 'ADD_SAMPLE_SUCCESS':
      return [
        ...state,
        // object.assign copy values from object (or objects) and return new one
        Object.assign({}, action.data)
      ];

    default:
      return state;
  }
};
// www.visualstudio.com/pl/dev-essentials/
