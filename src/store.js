// ./store.js
import { createStore } from 'redux';

const initialUserState = {
  email: '',
  password: '',
  passwordConfirmation: ''
};

const store = createStore({
  user: initialUserState,
});

export default store;