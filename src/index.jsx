// import "bootstrap-sass";
import './assets/stylesheets/bootstrap.min.css'
import './assets/stylesheets/main.scss';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import Kanban from './components/kanban/Kanban'

import RegistrationPage from './components/pages/RegistrationPage'
import comingSoonPage from './components/pages/comingSoonPage'

import { Provider } from 'react-redux';
import store from './store.js';

import T from 'i18n-react';


T.setTexts(require('../locales/en.yml'));

render((
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={comingSoonPage}/>
      <Route path="/kanban" component={Kanban}/>
      <Route path="/register" component={RegistrationPage}/>
    </Router>
  </Provider>
), document.getElementById('root'));
