import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {handleGoogleSignOutActionCreator, 
  handleGoogleActionCreator, handleGoogleSignInActionCreator} from '../../../store/actions/googleAuth'

import GoogleIcon from '../../../assets/images/google.png';

const GoogleSign = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleGoogleActionCreator())
  }, [])

  const handleGoogleIn = () => {
    dispatch(handleGoogleSignInActionCreator())
  }

  const handleGoogleOut = () => {
    dispatch(handleGoogleSignOutActionCreator)
  }

  return (
    <button className='google' onClick={handleGoogleIn}>
      <img src={GoogleIcon} alt='google' className='google-icon'/>
      <p className='google-text'>Sign up with Google</p>
    </button>
  )
}

export default GoogleSign
