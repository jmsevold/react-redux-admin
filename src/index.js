import React from 'react';
import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
