// React
import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/style.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import './setWindow';

// Redux
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';

// Redux-Actions
import {loadSample} from './redux/actions/sampleActions';

// Libs
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Redux Store
const store = configureStore();
store.dispatch(loadSample());

// Initial
ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
