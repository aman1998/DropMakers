import React, {useState}  from 'react';
import { useSelector } from 'react-redux';

import { PrivateHeader, Footer } from '../index';

const PrivatePageTemplate = (props) => {
  const {theme} = useSelector((state) => ({
    theme: state.themeSwitcher.theme
  }))

  return (
    <div className={`page ${theme === 'dark' && 'theme-dark'}`}>
      <PrivateHeader />
      <main style={{minHeight: '74vh'}}>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default PrivatePageTemplate
