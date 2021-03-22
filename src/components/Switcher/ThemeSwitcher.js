import React from 'react';
import { Switch } from 'antd';

const ThemeSwitcher = ({setTheme, theme}) => {
  // Switch to dark/light theme
  const handleTheme = (checked) => {
    if(checked === true) {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
    else {
      localStorage.removeItem('theme')
     setTheme('light')
    }
   }

  return (
    <div className='switcher-wrapper'>
      <Switch onChange={handleTheme} className='switcher' defaultChecked={theme === 'dark' ? true : false} />
    </div>
  )
}

export default ThemeSwitcher
