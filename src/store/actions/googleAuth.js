import {auth} from '../../axios/axios';

export const handleGoogleActionCreator = () => dispatch => {
  window.gapi.load('auth2', function() {
    window.gapi.auth2.init({
      // client_id: process.env.REACT_APP_GOOGLE_ID_CLIENT
      client_id: '1014024975064-8chcqru11epknmc560k3eooth12b1hp9.apps.googleusercontent.com'
    })
    .then((res) => {
      console.log('success', res)
    })
    .catch((e) => {
      console.log('error', e)
    })
  })
}

export const handleGoogleSignInActionCreator = () => dispatch => {
  const GoogleAuth = window.gapi.auth2.getAuthInstance()
    GoogleAuth.signIn()
    .then(googleUser => {
      const profile = googleUser.getBasicProfile()
      const id_token = googleUser.getAuthResponse().id_token;
      console.log('code=' + id_token)
      // console.log('Full Name: ' + profile.getName());
      // console.log('Given Name: ' + profile.getGivenName());
      // console.log('Family Name: ' + profile.getFamilyName());
      // console.log("Image URL: " + profile.getImageUrl());
      // console.log("Email: " + profile.getEmail());
    })
    .catch((e) => {
      console.log('error', e)
    })
}

export const handleGoogleSignOutActionCreator = () => dispatch => {
  const GoogleAuth = window.gapi.auth2.getAuthInstance()
  GoogleAuth.signOut().then(() => {
    console.log('signOut')
  })
}
