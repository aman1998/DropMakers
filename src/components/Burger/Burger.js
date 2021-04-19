import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ThemeSwitcher } from '../';

import UserIcon from '../../assets/icons/user.png';
import Ru from '../../assets/icons/RU.png';
import Usa from '../../assets/icons/US.png';

const Burger = ({setVisible, setSignUp}) => {
  const [burger, setBurger] = useState(false)

  const {isLog} = useSelector( state => ({
    isLog: state.profile.isLog
  }))

  const handleBurger = () => {
    setBurger(!burger)
    document.body.classList.toggle('lock')
  }

  const showDrawer = (value) => {
    setVisible(true)
    document.body.classList.toggle('lock')
    setBurger(!burger)
    // setBurger(false)
    if(value === 'Sign In') {
      setSignUp(false)
    }
  };

  return (
    <div className='burger'>
      <div className={`burger-icon ${burger ? 'burger-icon--active' : null}`} onClick={handleBurger}>
        <span className='span span--1'></span>
        <span className='span span--2'></span>
        <span className='span span--3'></span>
      </div>
      <div className={`burger-content ${burger ? 'burger-content--active' : null}`} onClick={handleBurger}>
        <nav className='burger-nav' onClick={e => e.stopPropagation()}>
          <div className='burger-nav-header'>
            { isLog && 
            <NavLink to='/dashboard' className='link-wrapper' exact><img src={UserIcon} alt='user' className='link' onClick={handleBurger}/></NavLink>
            }
          </div>
          <ul>
            <li className='item'><Link to='steps' className='link' smooth={true} duration={1500} onClick={handleBurger}>Steps</Link></li>
            <li className='item'><Link to='features' className='link' smooth={true} duration={1500} onClick={handleBurger}>Features</Link></li>
            <li className='item'><Link to='requirements' className='link' smooth={true} duration={1500} onClick={handleBurger}>Requirements</Link></li>
            <li className='item'><Link to='about' className='link' smooth={true} duration={1500} onClick={handleBurger}>About Us</Link></li>
            <li className='item'><Link to='contactsForm' className='link' smooth={true} duration={1500} onClick={handleBurger}>Contact Us</Link></li>
          </ul>
          {
            !isLog &&    
            <>
              <button className='btn' onClick={() => showDrawer('Sign Up')}>Sign Up</button>
              <button className='btn btn--2' onClick={() => showDrawer('Sign In')}>Sign In</button>
            </>
          }
          <div className='burger-flags'>
            <img src={Usa} alt='flag' className='flag flag-usa'/>
            <img src={Ru} alt='flag' className='flag flag--ru'/>
          </div>
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  )
}

export default Burger
