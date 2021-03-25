import {auth} from '../../axios/axios';
import {SIGN_UP_SUCCESS, SIGN_UP_LOADING, SIGN_UP_FAILED} from '../actionTypes';

export const handleSignUpActionCreator = ({first_name, last_name, email, password}) => dispatch => {
  dispatch({type: SIGN_UP_LOADING})
  auth.post('/users/signup/', {first_name, last_name, email, password})
    .then((res) => {
      console.log(res)
      dispatch({type: SIGN_UP_SUCCESS})
      alert('На почту отправлено ссылка подтверждение')
    })
    .catch((e) => {
      console.log('error', e)
      dispatch({type: SIGN_UP_FAILED})
    })
}