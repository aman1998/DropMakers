import React, {useState} from 'react';
import { Switch } from 'antd';
import { Link } from 'react-scroll';
import { SignForm, ProfileNav } from '../';
import { useSelector } from 'react-redux';

import Logo from '../../assets/images/logo.png'

import Ru from '../../assets/icons/RU.png';
import Usa from '../../assets/icons/US.png';

const Header = ({setTheme, theme}) => {
  const [visible, setVisible] = useState(false)
  const [signUp, setSignUp] = useState(true)

  const {isLog} = useSelector( state => ({
    isLog: state.profile.isLog
  }))

  // Open Sign Form
  const showDrawer = (value) => {
    setVisible(true)
    if(value === 'Sign In') {
      setSignUp(false)
    }
  };

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
    <header className='header'>
      <div className='container'>
        <img src={Logo} alt='logo' className='logo' />
        <nav className='navigation'>
          <ul>
            <li className='item'><Link to='steps' className='link' smooth={true} duration={1500}>Steps</Link></li>
            <li className='item'><Link to='features' className='link' smooth={true} duration={1500}>Features</Link></li>
            <li className='item'><Link to='requirements' className='link' smooth={true} duration={1500}>Requirements</Link></li>
            <li className='item'><Link to='about' className='link' smooth={true} duration={1500}>About Us</Link></li>
            <li className='item' ><Link to='contactsForm' className='link' smooth={true} duration={1500}>Contact Us</Link></li>
          </ul>
          <div className='switcher-wrapper'>
            <Switch onChange={handleTheme} className='switcher' defaultChecked={theme === 'dark' ? true : false} />
          </div>
          <div className='flags'>
            <img src={Usa} alt='flag' className='flag flag-usa'/>
            <img src={Ru} alt='flag' className='flag flag--ru'/>
          </div>
          {
            isLog ? 
            <ProfileNav /> :
            <div className='sign'>
              <div className='sign-in' onClick={() => showDrawer('Sign In')}>Sign In</div>
              <div className='sign-up' onClick={() => showDrawer('Sign Up')}>Sign Up</div>
            </div>
          }
        </nav>
      </div>
      <SignForm
        signUp={signUp}
        setSignUp={setSignUp}
        setVisible={setVisible}
        visible={visible}>
      </SignForm>
    </header>
  )
}


export default Header