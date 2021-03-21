import { combineReducers } from 'redux';
import works from './works';
import signUp from './signUp';
import signIn from './signIn';
import profile from './profile';

export default combineReducers({
  signUp,
  signIn,
  profile,
  works
})