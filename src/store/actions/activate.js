import {auth} from '../../axios/axios';
import {ACTIVATE_SUCCESS, ACTIVATE_LOADING, ACTIVATE_FAILED} from '../actionTypes';

// Activate
export const handleActivateActionCreator = (uid, token, handleRedirect) => dispatch => {
  dispatch({type: ACTIVATE_LOADING})
  auth.post('/users/activation/', {uid, token})
    .then((res) => {
      console.log('success', res)
      dispatch({type: ACTIVATE_SUCCESS})
      setTimeout(handleRedirect, 2000)
    })
    .catch((e) => {
      console.log('error', e.message)
      dispatch({type: ACTIVATE_FAILED})
    })
}
