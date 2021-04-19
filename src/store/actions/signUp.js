import {auth} from '../../axios/axios';
import {SIGN_UP_SUCCESS, SIGN_UP_LOADING, SIGN_UP_FAILED} from '../actionTypes';
import { message } from 'antd';

const errorHandler = (e) => (e.response ? e.response.data : e.message)

export const handleSignUpActionCreator = ({first_name, last_name, email, password}) => dispatch => {
  dispatch({type: SIGN_UP_LOADING})
  auth.post('/users/signup/', {first_name, last_name, email, password})
    .then(() => {
      dispatch({type: SIGN_UP_SUCCESS})
    })
    .catch((e) => {
      dispatch({type: SIGN_UP_FAILED, error: errorHandler(e)})
      message.error('Что то пошло не так, попробуйте снова');
      console.log(e)
    })
}