import {  GET_RESULTS,
  GET_RESULTS_LOADING, 
  GET_RESULTS_SUCCESS, 
  GET_RESULTS_FAILED
} from "../actionTypes"

const initialState = {
results: [],
get: {
  success: false,
  loading: false,
  failed: false,
  error: '',
}
}

const results = (state = initialState, action) => {
switch (action.type) {
  case GET_RESULTS:
    let result = []
    for(let i = 0; i <= 10; i++) {
      result.push(action.results[i])
    }
    return {
    ...state,
    results: result,
    }
  case GET_RESULTS_LOADING:
    return {
      ...state,
      get: {
        success: false,
        loading: true,
        failed: false,
        error: '',
      },
}
  case GET_RESULTS_SUCCESS:
    return {
      ...state,
      get: {
        success: true,
        loading: false,
        failed: false,
        error: '',
      },
}
  case GET_RESULTS_FAILED:
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

export default results