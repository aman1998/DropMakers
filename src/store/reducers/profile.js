import {
  GET_PROFILE, 
  GET_TOKEN, 
  IS_LOG, 
  GET_PROFILE_SUCCESS, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_FAILED,
  SETTINGS_PROFILE_SUCCESS, 
  SETTINGS_PROFILE_LOADING, 
  SETTINGS_PROFILE_FAILED,
  SETTINGS_EMAIL_SUCCESS, 
  SETTINGS_EMAIL_LOADING, 
  SETTINGS_EMAIL_FAILED,
  SETTINGS_PASSWORD_SUCCESS, 
  SETTINGS_PASSWORD_LOADING, 
  SETTINGS_PASSWORD_FAILED,
} from "../actionTypes";

const initialState = {
  token: localStorage.getItem('token') || false,
  myProfile: {},
  isLog: false,
  get: {
    success: false,
    loading: false,
    failed: false
  },
  post: {
    success: false,
    loading: false,
    failed: false
  },
  patchEmail: {
    success: false,
    loading: false,
    failed: false
  },
  patchPassword: {
    success: false,
    loading: false,
    failed: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: localStorage.getItem('token') || false,
      }
    case GET_PROFILE:
      return {
        ...state,
        myProfile: action.myProfile,
      }
    case IS_LOG:
      return {
        ...state,
        isLog: action.isLog,
      }
    case GET_PROFILE_LOADING:
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false
        },
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        get: {
          success: true,
          loading: false,
          failed: false
        },
      }
    case GET_PROFILE_FAILED:
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true
        },
      }
    case SETTINGS_PROFILE_LOADING:
      return {
        ...state,
        post: {
          success: false,
          loading: true,
          failed: false
        },
      }
    case SETTINGS_PROFILE_SUCCESS:
      return {
        ...state,
        post: {
          success: true,
          loading: false,
          failed: false
        },
      }
    case SETTINGS_PROFILE_FAILED:
      return {
        ...state,
        post: {
          success: false,
          loading: false,
          failed: true
        },
      }
    case SETTINGS_EMAIL_LOADING:
      return {
        ...state,
        patchEmail: {
          success: false,
          loading: true,
          failed: false
        },
      }
    case SETTINGS_EMAIL_SUCCESS:
      return {
        ...state,
        patchEmail: {
          success: true,
          loading: false,
          failed: false
        },
      }
    case SETTINGS_EMAIL_FAILED:
      return {
        ...state,
        patchEmail: {
          success: false,
          loading: false,
          failed: true
        },
      }
    case SETTINGS_PASSWORD_LOADING:
      return {
        ...state,
        patchPassword: {
          success: false,
          loading: true,
          failed: false
        },
      }
    case SETTINGS_PASSWORD_SUCCESS:
      return {
        ...state,
        patchPassword: {
          success: true,
          loading: false,
          failed: false
        },
      }
    case SETTINGS_PASSWORD_FAILED:
      return {
        ...state,
        patchPassword: {
          success: false,
          loading: false,
          failed: true
        },
      }
    default: return state
  }
}

export default reducer
