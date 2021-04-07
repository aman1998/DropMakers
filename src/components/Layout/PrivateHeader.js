import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileNav, ThemeSwitcher } from '../';

import Logo from '../../assets/images/logo.png';
import BellIcon from '../../assets/icons/bell.png';
import MailIcon from '../../assets/icons/mail.png';
import ChevronIcon from '../../assets/icons/chevron.png';

const Header = () => {
  return (
    <header className='header private-header'>
      <div className='container'>
        <NavLink to='/' exact><img src={Logo} alt='logo' className='logo' /></NavLink>
        <nav className='navigation'>
          <ul>
            <li className='item'><NavLink to='/dashboard' className='link' exact>Dashboard</NavLink></li>
            <li className='item'><NavLink to='/search' className='link' exact>Search</NavLink></li>
            <li className='item item--inventory'>
              <NavLink to='/myinventory' className='link' exact>My Inventory</NavLink>
              <div className='dropdown'>
                <div className='dropdown-item dropdown-item--1'> 
                  <NavLink to='/' className='dropdown-item' exact>Settings Groups</NavLink>
                </div>
                <div className='dropdown-item'> 
                  <NavLink to='/' className='dropdown-item' exact>Inventory Changes</NavLink>
                </div>
                <div className='dropdown-item'> 
                  <NavLink to='/' className='dropdown-item' exact>Inventiry Import</NavLink>
                </div>
                <div className='dropdown-item item item--export'> 
                  <NavLink to='/' className='dropdown-item' exact>
                    <div>Export to Excel</div>
                    <img src={ChevronIcon} alt='chevron' className='chevron'/>
                  </NavLink>
                  <div className='dropdown'>
                    <div className='dropdown-item dropdown-item--1'> 
                      <NavLink to='/' className='dropdown-item' exact>From eBuy</NavLink>
                    </div>
                    <div className='dropdown-item dropdown-item--1'> 
                      <NavLink to='/' className='dropdown-item' exact>From Amazon</NavLink>
                    </div>
                    <div className='dropdown-item dropdown-item--1'> 
                      <NavLink to='/' className='dropdown-item' exact>From Orders</NavLink>
                    </div>
                  </div>
                </div>
                <div className='dropdown-item'> 
                  <NavLink to='/' className='dropdown-item' exact>Brands</NavLink>
                </div>
                <div className='dropdown-item'> 
                  <NavLink to='/' className='dropdown-item' exact>Black Lists</NavLink>
                </div>
                <div className='dropdown-item'> 
                  <NavLink to='/' className='dropdown-item' exact>White Lists</NavLink>
                </div>
              </div>
            </li>
            <li className='item item--order'>
              <NavLink to='/myorders' className='link' exact>My Orders</NavLink>
              <div className='dropdown'>
                <div className='dropdown-item dropdown-item--1'> 
                  <NavLink to='/myorders/returns' className='dropdown-item' exact>Orders returns</NavLink>
                </div>
              </div>
            </li>
            <li className='item item--report'>
              <NavLink to='/reports' className='link' exact>Reports</NavLink>
              <div className='dropdown'>
                <div className='dropdown-item dropdown-item--1'> 
                  <NavLink to='/' className='dropdown-item' exact>Sales</NavLink>
                </div>
                <div className='dropdown-item dropdown-item--1'> 
                  <NavLink to='/' className='dropdown-item' exact>Amazon Traffic</NavLink>
                </div>
                <div className='dropdown-item dropdown-item--1'> 
                  <NavLink to='/' className='dropdown-item' exact>Inventory Analysis</NavLink>
                </div>
              </div>
              </li>
          </ul>
          <ThemeSwitcher />
          <ul>
            <li className='item'>
              <NavLink to='/notifications' className='link link-icon' exact>
                <img src={BellIcon} alt='bell' className='bell'/>
                <div className='circle'></div>
              </NavLink>
            </li>
            <li className='item'>
              <NavLink to='/mail' className='link link-icon' exact>
                <img src={MailIcon} alt='email' className='email'/>
                <div className='circle'></div>
              </NavLink>
            </li>
            <li className='item'><NavLink to='/store' className='link' exact>My Store</NavLink></li>
          </ul>
          <ProfileNav />
        </nav>
      </div>
    </header>
  )
}


export default Header