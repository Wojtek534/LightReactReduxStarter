import * as actions from '../actionTypes';

export function loadData(data) {
  return {type: actions.LOAD_DATA, data}
}
