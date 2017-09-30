export default function dataReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_DATA':
      return [
        ...state,
        Object.assign({}, action.data)
      ];

    default:
      return state;
  }
};
