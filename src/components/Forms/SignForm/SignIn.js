import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSignInActionCreator } from '../../../store/actions/signIn';
import { useHistory } from "react-router-dom";
import { ButtonApi } from '../../'

import { Input } from 'antd';
import Logo from '../../../assets/images/logo.png';

const SignIn = ({setSignUp}) => {
  const {loading, failed} = useSelector(state => ({
    // success: state.signIn.post.success,
    loading: state.signIn.post.loading,
    failed: state.signIn.post.failed
  }))

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('dashboard');
  }


  const handleSignIn = (e) => {
    e.preventDefault()
    if(email !== '' && password !== '') {
      dispatch(handleSignInActionCreator(email, password, handleRedirect))
    }
    else console.log('fill!')
  }
  

  return (
    <section className='signIn'>
      <img src={Logo} alt='logo' className='logo' />
      <div className='signIn-left'>
        <div className='content'>
          <h2 className='title'>Create an account</h2>
          <p className='text'>Register to enter your account</p>
          <button className='btn' onClick={() => setSignUp(true)}>SIGN UP</button>
        </div>
      </div>
      <form className='signIn-right' onSubmit={handleSignIn}>
        <h1 className='title'>LOG IN</h1>
        <label htmlFor='username'>* Email</label>
        <input 
          className='input username' 
          id='username'
          onChange={(e) => setEmail(e.target.value)}
          />
        <label htmlFor='password'>* Password</label>
        <Input.Password 
          bordered={false} 
          className='input password' 
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          />
        <div className='password-forgot'>Forgot password?</div>
        <ButtonApi loading={loading} title='SIGN IN' failed={failed}/>
        <div className='content'>
          <h2 className='title'>Create an account</h2>
          <p className='text'>Register to enter your account</p>
          <button className='btn' onClick={() => setSignUp(true)}>SIGN UP</button>
        </div>
      </form>
    </section>
  )
}

export default SignIn
