// ./store.js
import { createStore, applyMiddleware, compose } from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';

const initialUserState = {
  email: '',
  password: '',
  passwordConfirmation: ''
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineForms({
  user: initialUserState,
}), composeEnhancers(applyMiddleware(thunk)));

export default store;