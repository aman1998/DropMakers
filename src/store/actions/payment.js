import {POST_PAYPAL_SUCCESS, POST_PAYPAL_LOADING, POST_PAYPAL_FAILED, GET_PAYPAL_VALUE} from '../actionTypes'
import { payments } from '../../axios/axios';
import { message } from 'antd';

export const handlePaypalActionCreator = (setIsModalVisible) => dispatch  => {
  dispatch({type: POST_PAYPAL_LOADING})
  message.loading('Loading')
	payments.post('/paypal/buy_premium/', {})
		.then(({data}) => {
      console.log(data)
      message.destroy()
      dispatch(getPaypalValue(data))
      dispatch({type: POST_PAYPAL_SUCCESS})
      setIsModalVisible(true)
		})
		.catch(e => {
      message.error('This is an error message');
      console.log(e)
      dispatch({type: POST_PAYPAL_FAILED})
    })
}

const getPaypalValue = (paypalValue) => ({
  type: GET_PAYPAL_VALUE,
  paypalValue 
})