import {auth} from '../../axios/axios';
import {SIGN_IN_SUCCESS, SIGN_IN_LOADING, SIGN_IN_FAILED} from '../actionTypes';
import { checkIsLog } from './profile';
import { message } from 'antd';

// Sign In
export const handleSignInActionCreator = (email, password, handleRedirect) => dispatch => {
  dispatch({type: SIGN_IN_LOADING})
  console.log(email, password)
  auth.post('/token/login/', {email, password})
    .then(({data}) => {
      localStorage.setItem('token', `Token ${data.auth_token}`)
      dispatch(checkIsLog(true))
      dispatch({type: SIGN_IN_SUCCESS})
      handleRedirect()
    })
    .catch((e) => {
      message.error('Неправильный логин или пароль');
      console.log('error', e.message)
      dispatch({type: SIGN_IN_FAILED})
      dispatch(checkIsLog(false))
    })
}
