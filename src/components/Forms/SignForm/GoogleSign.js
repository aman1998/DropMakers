import React, {useEffect} from 'react';

import GoogleIcon from '../../../assets/images/google.png';

const GoogleSign = () => {
  useEffect(() => {
    window.gapi.load('auth2', function() {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_ID_CLIENT
      })
      .then((res) => {
        console.log('success', res)
      })
      .catch((e) => {
        console.log('error', e)
      })
    })
  }, [])

  const handleGoogleSignIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    GoogleAuth.signIn()
    .then(googleUser => {
      const profile = googleUser.getBasicProfile()
      const id_token = googleUser.getAuthResponse().id_token;
      console.log(profile, id_token)
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());
    })
    .catch((e) => {
      console.log('error', e)
    })
  }

  const handleGoogleSignOut = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    GoogleAuth.signOut().then(() => {
      console.log('signOut')
    })
  }

  return (
    <button className='google' onClick={handleGoogleSignIn}>
      <img src={GoogleIcon} alt='google' className='google-icon'/>
      <p className='google-text'>Sign up with Google</p>
    </button>
  )
}

export default GoogleSign
