import { ADD_CONTROL_SUCCESS, ADD_CONTROL_LOADING, ADD_CONTROL_FAILED,
        GET_CONTROL_ME_SUCCESS, GET_CONTROL_ME_LOADING, GET_CONTROL_ME_FAILED, 
        GET_CONTROL_THEM_SUCCESS, GET_CONTROL_THEM_LOADING, GET_CONTROL_THEM_FAILED,
        GET_CONTROL_LIST_ME, GET_CONTROL_LIST_THEM, DELETE_CONTROL_SUCCESS, 
        DELETE_CONTROL_LOADING, DELETE_CONTROL_FAILED, } from '../actionTypes'

const initialState = {
  accessControlListMe: [],
  accessControlListThem: [],
  getMe: {
    loading: false,
    success: false,
    failed: false, 
    error: ''
  },
  getThem: {
    loading: false,
    success: false,
    failed: false, 
    error: ''
  },
  add: {
    loading: false,
    success: false,
    failed: false, 
    error: ''
  },
  delete: {
    loading: false,
    success: false,
    failed: false, 
    error: ''
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTROL_LIST_ME:
      return {
        ...state,
        accessControlListMe: action. accessControlListMe
      }
    case GET_CONTROL_LIST_THEM:
      return {
        ...state,
        accessControlListThem: action. accessControlListThem
      }
    case GET_CONTROL_ME_LOADING:
      return {
        ...state,
        getMe: {
          success: false,
          loading: true,
          failed: false,
          error: ''
        },
      }
    case GET_CONTROL_ME_SUCCESS:
      return {
        ...state,
        getMe: {
          success: true,
          loading: false,
          failed: false,
          error: ''
        },
      }
    case GET_CONTROL_ME_FAILED:
      return {
        ...state,
        getMe: {
          success: false,
          loading: false,
          failed: true,
          error: action.error
        },
      }
    case GET_CONTROL_THEM_LOADING:
      return {
        ...state,
        getThem: {
          success: false,
          loading: true,
          failed: false,
          error: ''
        },
      }
    case GET_CONTROL_THEM_SUCCESS:
      return {
        ...state,
        getThem: {
          success: true,
          loading: false,
          failed: false,
          error: ''
        },
      }
    case GET_CONTROL_THEM_FAILED:
      return {
        ...state,
        getThem: {
          success: false,
          loading: false,
          failed: true,
          error: action.error
        },
      }
    case ADD_CONTROL_LOADING:
      return {
        ...state,
        add: {
          success: false,
          loading: true,
          failed: false,
          error: ''
        },
      }
    case ADD_CONTROL_SUCCESS:
      return {
        ...state,
        add: {
          success: true,
          loading: false,
          failed: false,
          error: ''
        },
      }
    case ADD_CONTROL_FAILED:
      return {
        ...state,
        add: {
          success: false,
          loading: false,
          failed: true,
          error: action.error
        },
      }
    case DELETE_CONTROL_LOADING:
      return {
        ...state,
        add: {
          success: false,
          loading: true,
          failed: false,
          error: ''
        },
      }
    case DELETE_CONTROL_SUCCESS:
      return {
        ...state,
        delete: {
          success: true,
          loading: false,
          failed: false,
          error: ''
        },
      }
    case DELETE_CONTROL_FAILED:
      return {
        ...state,
        delete: {
          success: false,
          loading: false,
          failed: true,
          error: action.error
        },
      }
    default: return state
  }
}

export default reducer