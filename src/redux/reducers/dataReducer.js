export default function dataReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_DATA':
      return [
        ...state,
        // object.assign copy values from object (or objects) and return new one
        Object.assign({}, action.data)
      ];

    default:
      return state;
  }
};
