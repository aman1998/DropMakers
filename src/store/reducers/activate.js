import {ACTIVATE_SUCCESS, ACTIVATE_LOADING, ACTIVATE_FAILED} from '../actionTypes'

const initialState = {
  post: {
    loading: false,
    success: false,
    failed: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case ACTIVATE_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case ACTIVATE_FAILED:
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

