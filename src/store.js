// ./store.js
import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialUserState = {
  email: '',
  password: '',
  passwordConfirmation: ''
};

const store = createStore(combineForms({
  user: initialUserState,
}));

export default store;