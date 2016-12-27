// import "bootstrap-sass";
import './assets/stylesheets/bootstrap.min.css'
import './assets/stylesheets/main.scss';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import { Provider } from 'react-redux';
import store from './store.js';


render((
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/"/>
    </Router>
  </Provider>
), document.getElementById('root'));
