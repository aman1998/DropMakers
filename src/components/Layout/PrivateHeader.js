import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileNav, ThemeSwitcher } from '../';

import Logo from '../../assets/images/logo.png';
import BellIcon from '../../assets/icons/bell.png';
import MailIcon from '../../assets/icons/mail.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <NavLink to='/' exact><img src={Logo} alt='logo' className='logo' /></NavLink>
        <nav className='navigation'>
          <ul>
            <li className='item'><NavLink to='/dashboard' className='link' exact>Dashboard</NavLink></li>
            <li className='item'><NavLink to='/search' className='link' exact>Search</NavLink></li>
            <li className='item'><NavLink to='/myinventory' className='link' exact>My Inventory</NavLink></li>
            <li className='item'><NavLink to='/myorders' className='link' exact>My Orders</NavLink></li>
            <li className='item' ><NavLink to='/reports' className='link' exact>Reports</NavLink></li>
          </ul>
          <ThemeSwitcher />
          <ul>
            <li className='item'>
              <NavLink to='/dashboard' className='link link-icon' exact>
                <img src={BellIcon} alt='bell' className='bell'/>
                <div className='circle'></div>
              </NavLink>
            </li>
            <li className='item'>
              <NavLink to='/dashboard' className='link link-icon' exact>
                <img src={MailIcon} alt='email' className='email'/>
                <div className='circle'></div>
              </NavLink>
            </li>
            <li className='item'><NavLink to='/mystore' className='link' exact>My Store</NavLink></li>
          </ul>
          <ProfileNav />
        </nav>
      </div>
    </header>
  )
}


export default Header