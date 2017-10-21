// React
import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/style.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';

// Libs
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Const
const store = configureStore();

// Initial
ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
