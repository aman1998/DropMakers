import { combineReducers } from 'redux';
import results from './results';
import signUp from './signUp';
import signIn from './signIn';
import profile from './profile';
import activate from './activate';
import themeSwitcher from './themeSwitcher';
import accessControl from './accessControl';
import payment from './payment';

export default combineReducers({
  signUp,
  signIn,
  profile,
  results,
  activate,
  themeSwitcher,
  accessControl,
  payment
})