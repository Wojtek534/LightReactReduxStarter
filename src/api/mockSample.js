import {delay} from 'mockSetup';
import sampleStore from './dataSample';

class SampleApi {
  static getSample() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], sampleStore));
      }, delay);
    });
  }
  static addSample(sample) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sample.name.length < 3) {
          reject('Name must have at least 3 characters.')
        } else {
          sampleStore.push(sample)
        }
        resolve(Object.assign[], sampleStore);
      }, delay);
    });
  }
  static deleteSample(sampleId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexSampleToDelete = sampleStore.findIndex(sampleStore => {
          return sampleStore.id = sampleId
        });
        sampleStore.splice(indexSampleToDelete, 1);
        resolve();
      }, delay);
    });
  }
}
