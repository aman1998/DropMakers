import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {handleTheme as handleThemeAction} from '../../store/actions/themeSwitcher';


import { Switch } from 'antd';

const ThemeSwitcher = () => {
  const {theme} = useSelector((state) => ({
    theme: state.themeSwitcher.theme
  }))

  const dispatch = useDispatch()
  
  // Switch to dark/light theme
  const handleTheme = (checked) => {
    if(checked === true) {
      localStorage.setItem('theme', 'dark')

      dispatch(handleThemeAction('dark'))
    }
    else {
      localStorage.removeItem('theme')
      dispatch(handleThemeAction('light'))
    }
   }

  return (
    <div className='switcher-wrapper'>
      <Switch onChange={handleTheme} className='switcher' defaultChecked={theme === 'dark' ? true : false} />
    </div>
  )
}

export default ThemeSwitcher
