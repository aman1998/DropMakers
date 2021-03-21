import React, {useState} from 'react';

import { SignForm } from '../'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [signUp, setSignUp] = useState(true)

  // Open Sign Form
  const showDrawer = (value) => {
    setVisible(true)
    if(value === 'Sign In') {
      setSignUp(false)
    }
  };
  
  return (
    <section className='login'>
      <div className='container'>
        <h2 className='title'>Ready to start with us?</h2>
        <p>Sign up now </p>
        <p>Our platform will take care of most the stuff for you</p>
        <button onClick={showDrawer} className='btn'>SIGN UP</button>
        <p>Already working with us?</p>
        <div onClick={showDrawer}>Sign In</div>
      <SignForm
        signUp={signUp}
        setSignUp={setSignUp}
        setVisible={setVisible}
        visible={visible}>
      </SignForm>
      </div>
    </section>
  )
}

export default Login
