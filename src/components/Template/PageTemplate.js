import React, {useState} from 'react';
// import { BackTop } from 'antd';

import { Header, Footer } from '../index';

// Обертка для всего сайта
const PageTemplate = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light') 

  return (
    <div className={`page ${theme === 'dark' && 'theme-dark'}`}>
      <Header setTheme={setTheme} theme={theme} />
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