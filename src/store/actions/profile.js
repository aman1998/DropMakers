import {
  GET_TOKEN, 
  IS_LOG, 
  GET_PROFILE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS
} from "../actionTypes"

import {auth} from '../../axios/axios'

export const handleProfileActionCreator = () => dispatch => {
  dispatch({ type: GET_PROFILE_LOADING })
  const token = localStorage.getItem('token')
  auth.get('/users/me/', {
    headers: {
      'Authorization': `${token}`
    }
  })
    .then(({data}) => {
      dispatch(getProfile(data))
      dispatch(checkIsLog(true))
      dispatch({ type: GET_PROFILE_SUCCESS})
    })
    .catch((e) => {
      console.log(e.message)
      dispatch(checkIsLog(false))
      dispatch(getToken(''))
      dispatch({ type: GET_PROFILE_FAILED })
    })
}


export const handleLogoutActionCreator = (token, handleRedirect) => dispatch  => {
	auth.post('/token/logout/', {} ,{
		headers: {
			'Authorization': token
		}
	})
		.then(() => {
			localStorage.removeItem('token')
			dispatch(getProfile({}))
      dispatch(checkIsLog(false))
      handleRedirect()
		})
		.catch(e => console.log(e))
}

export const getProfile = (payload) => ({
  type: GET_PROFILE,
  payload
})


export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})

export const getToken = (token) => ({
  type: GET_TOKEN,
  token
})
