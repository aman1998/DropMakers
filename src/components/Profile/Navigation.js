import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLogoutActionCreator } from '../../store/actions/profile';

import UserIcon from '../../assets/icons/user.png';

const Navigation = () => {
  const dispacth = useDispatch()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('/');
  }

  const handleLogout = () => {
    const token = localStorage.getItem('token')
    dispacth(handleLogoutActionCreator(token, handleRedirect))
  }

  return (
    <nav className='profile-navigation'>
      <NavLink to='/dashboard' className='link-wrapper' exact><img src={UserIcon} alt='user' className='link'/></NavLink>
      <div className='dropdown'>
        <div className='dropdown-item dropdown-item--1'> 
          <NavLink to='/settings' className='dropdown-item' exact>Account Settings</NavLink>
        </div>
        <div className='dropdown-item'> 
          <NavLink to='/payments' className='dropdown-item' exact>My Payment</NavLink>
        </div>
        <div className='dropdown-item'> 
          <NavLink to='/access-control' className='dropdown-item' exact>Access Control</NavLink>
        </div>
        <div className='dropdown-item'> 
          <button onClick={handleLogout} className='dropdown-item btn'>Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
