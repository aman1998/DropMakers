import React, { useState } from 'react';

import Icon from '../../../assets/icons/x.png'

const SearchMail = () => {
  const [value, setValue] = useState('')

  return (
    <form className='search-mail'>
      <input 
        placeholder='Search' 
        className='search-input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      <div className='icon-wrapper'>
        <img src={Icon} alt='x' className='icon' onClick={() => setValue('')}/>
      </div>
    </form>
  )
}

export default SearchMail
