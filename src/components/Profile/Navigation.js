import React from 'react';
import { NavLink } from 'react-router-dom'

import UserIcon from '../../assets/icons/user.png';

const Navigation = () => {
  return (
    <nav className='profile-navigation'>
          <img src={UserIcon} alt='user' className='link'/>
          <div className='dropdown'>
            <div className='dropdown-item'> 
              <NavLink to='/profile' className='dropdown-item' exact>1</NavLink>
            </div>
            <div className='dropdown-item'> 
              <NavLink to='/profile' className='dropdown-item' exact>2</NavLink>
            </div>
            <div className='dropdown-item'> 
              <NavLink to='/profile' className='dropdown-item' exact>3</NavLink>
            </div>
          </div>
    </nav>
  )
}

export default Navigation
