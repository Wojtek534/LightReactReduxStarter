import * as actions from './actionTypes';
import sampleApi from '../../api/mockSample';

export function loadSampleSuccess(sampleStore) {
  return {type: actions.LOAD_SAMPLE_SUCCESS, sampleStore}
}
export function loadSample() {
  return function (dispatch) {
    return sampleApi
      .getSample()
      .then(sampleStore => {
        dispatch(loadSampleSuccess(sampleStore));
      })
      .catch(error => {
        throw(error)
      });
  }
}
