import { ebay } from "../../axios/axios";
import {GET_RESULTS, GET_RESULTS_FAILED, GET_RESULTS_LOADING, GET_RESULTS_SUCCESS} from "../actionTypes";
import results from "../reducers/results";

export const handleResultsAcionCreater = (query) => dispatch => {
  dispatch({type: GET_RESULTS_LOADING})
  ebay.post('/search/search/', {query})
    .then(data => {
      dispatch(getResults(data.data))
      dispatch({type: GET_RESULTS_SUCCESS})
    })
    .catch((e) => {
      console.log(e)
      dispatch({type: GET_RESULTS_FAILED})
    })
}


export const getResults = (results) => ({
  type: GET_RESULTS,
  results
})

