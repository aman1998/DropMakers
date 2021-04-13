import {EBAY_CONNECT_SUCCESS, EBAY_CONNECT_LOADING, EBAY_CONNECT_FAILED} from '../actionTypes'

const initialState = {
  post: {
    loading: false,
    success: false,
    failed: false,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EBAY_CONNECT_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case EBAY_CONNECT_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case EBAY_CONNECT_FAILED:
      return {
        ...state,
        post: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    default: return state
  }
}

export default reducer