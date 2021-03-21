import axios from "../../axios/axios";
import {GET_WORKS, GET_WORKS_FAILED, GET_WORKS_LOADING, GET_WORKS_SUCCESS} from "../actionTypes";

export const fetchWorksAcionCreater = () => dispatch => {
  dispatch({type: GET_WORKS_LOADING})
  axios.get('/works/')
    .then((res) => {
      if (res.data) {
        dispatch(getWorks(res.data))
        dispatch({type: GET_WORKS_SUCCESS})
      }
    })
    .catch(e => {
      console.log(e)
      dispatch({type: GET_WORKS_FAILED})
    })
}


export const getWorks = (works) => ({
  type: GET_WORKS,
  works
})

