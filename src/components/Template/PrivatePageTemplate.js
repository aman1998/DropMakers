import React, {useState}  from 'react';

import { PrivateHeader, Footer } from '../index';

const PrivatePageTemplate = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  return (
    <div className={`page ${theme === 'dark' && 'theme-dark'}`}>
      <PrivateHeader setTheme={setTheme} theme={theme} />
      <main style={{minHeight: '75vh'}}>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default PrivatePageTemplate
