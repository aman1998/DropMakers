import {POST_PAYPAL_SUCCESS, POST_PAYPAL_LOADING, POST_PAYPAL_FAILED, GET_PAYPAL_VALUE} from '../actionTypes'

const initialState = {
  paypalValue: {},
  postPaypal: {
    loading: false,
    success: false,
    failed: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYPAL_VALUE:
      return {
        ...state,
        paypalValue: action.paypalValue
      }
    case POST_PAYPAL_LOADING:
      return {
        ...state,
        postPaypal: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case POST_PAYPAL_SUCCESS:
      return {
        ...state,
        postPaypal: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case POST_PAYPAL_FAILED:
      return {
        ...state,
        postPaypal: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    default: return state
  }
}

export default reducer

