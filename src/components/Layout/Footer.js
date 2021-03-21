import React from 'react';

import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <img src={Logo} className='footer-logo' alt='logo' />   
      <p className='footer-text'>Copyright ©2021 All rights reserved</p>
    </footer>
  )
}

export default Footer