import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  handleEmailSettingsActionCreator } from '../../store/actions/profile';
import { message } from 'antd';

import { ButtonApi } from '../';

const EmailSettings = () => {
  const [email, setEmail] = useState('')

  const { loading, failed } = useSelector( state => ({
    loading: state.profile.patchEmail.loading,
    failed: state.profile.patchEmail.failed,
  }))

  const dispatch = useDispatch()

  const handleEmailSettings = (e) => {
    e.preventDefault()
    if(email !== '') {
      dispatch(handleEmailSettingsActionCreator(email))
      console.log(email)
    }
    if(email === '') {
      message.error('Поле не может быть пустым')
    }
  }

  return (
    <form className='email-settings' onSubmit={(e) => handleEmailSettings(e)}>
      <div className='email-left'>
        <div className='email-title'>New Email</div>
        <input 
          className='email-input' 
          placeholder='new email' 
          type='email'
          onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <ButtonApi title={'Save'} loading={loading} failed={failed} />
    </form>
  )
}

export default EmailSettings
