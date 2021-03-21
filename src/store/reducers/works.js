import {  GET_WORKS,
  GET_WORKS_LOADING, 
  GET_WORKS_SUCCESS, 
  GET_WORKS_FAILED
} from "../actionTypes"

const initialState = {
works: [],
get: {
success: false,
loading: false,
failed: false,
error: '',
}
}

const works = (state = initialState, action) => {
switch (action.type) {
case GET_WORKS:
return {
...state,
works: action.works,
}
case GET_WORKS_LOADING:
return {
  ...state,
  get: {
    success: false,
    loading: true,
    failed: false,
    error: '',
  },
}
case GET_WORKS_SUCCESS:
return {
  ...state,
  get: {
    success: true,
    loading: false,
    failed: false,
    error: '',
  },
}
case GET_WORKS_FAILED:
return {
  ...state,
  get: {
    success: false,
    loading: false,
    failed: true,
    error: '',
  },
}
default:
return state
}
}

export default works