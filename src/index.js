import React from 'react';
import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
