import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handlePasswordSettingsActionCreator, handleProfileActionCreator } from '../../store/actions/profile';

import { ButtonApi } from '../';
import { message } from 'antd';

const PasswordSettings = () => {
  const [reload, setReload] = useState(false)
  const [old_password, setOldPassword] = useState('')
  const [new_password, setNewPassword] = useState('')

  const { loading, failed } = useSelector( state => ({
    loading: state.profile.patchPassword.loading,
    failed: state.profile.patchPassword.failed,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if(reload) {
      dispatch(handleProfileActionCreator())
      setReload(false)
    }
  }, [reload])

  const handlePasswordSettings = (e) => {
    e.preventDefault()
    if(old_password !== '' && new_password !== '' && new_password.length >= 6 && old_password !== new_password) {
      dispatch(handlePasswordSettingsActionCreator(old_password, new_password, setReload, setOldPassword, setNewPassword))
    }
    if(old_password === '' && new_password === '') {
      message.error('Поле не может быть пустым')
    }
    if(new_password.length < 6) {
      message.error('Пароль должен иметь более 5 символов')
    }
    if(old_password === new_password) {
      message.error('Выберите другой пароль')
    }
  }

  return (
    <form className='password-settings' onSubmit={handlePasswordSettings}>
        <div className='password-left'>
          <div className='password-title'>New password</div>
          <div className='input-wrapper'>
            <input 
              className='input' 
              placeholder='old_password'
              type='password'
              value={old_password}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input 
              className='input' 
              placeholder='new_password'
              type='password'
              value={new_password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>
        <ButtonApi title={'Save'} loading={loading} failed={failed} />
    </form>
  )
}

export default PasswordSettings
