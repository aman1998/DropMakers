import React, {useState} from 'react';
import { useSelector } from 'react-redux';
// import { BackTop } from 'antd';

import { Header, Footer } from '../index';

// Обертка для всего сайта
const PageTemplate = (props) => {
  const {theme} = useSelector((state) => ({
    theme: state.themeSwitcher.theme
  }))

  return (
    <div className={`page ${theme === 'dark' && 'theme-dark'}`}>
      <Header />
      <main>
        {props.children}
        {/* <BackTop>
          <div className='back-top'>Top</div>
        </BackTop> */}
      </main>
      <Footer />
    </div>
  )
}

export default PageTemplate