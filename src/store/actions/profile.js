import {
  GET_TOKEN, 
  IS_LOG, 
  GET_PROFILE,
  GET_PROFILE_FAILED, 
  GET_PROFILE_LOADING, 
  GET_PROFILE_SUCCESS,
  SETTINGS_PROFILE_SUCCESS, 
  SETTINGS_PROFILE_LOADING, 
  SETTINGS_PROFILE_FAILED
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
      console.log(data)
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

export const handleChangeProfileActionCreator = (body, myProfile, data, setReload) => dispatch => {
  const token = localStorage.getItem('token')
  dispatch({ type: SETTINGS_PROFILE_LOADING })
  auth.patch(`/users/me/`, body, {
    headers:{
      'Authorization': token,
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(() => {
    dispatch(getProfile({...myProfile, ...data}))
    dispatch({ type: SETTINGS_PROFILE_SUCCESS })
    setReload(true)
  })
  .catch(e => {
    dispatch({ type: SETTINGS_PROFILE_FAILED })
    console.log(e)
  })
}

export const getProfile = (myProfile) => ({
  type: GET_PROFILE,
  myProfile
})


export const checkIsLog = (isLog) => ({
  type: IS_LOG,
  isLog
})

export const getToken = (token) => ({
  type: GET_TOKEN,
  token
})
