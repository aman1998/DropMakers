import {SET_THEME} from "../actionTypes";

const initialState = {
  theme: localStorage.getItem('theme') || 'light'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: action.theme
      }
    default: return state
  }
}


export default reducer