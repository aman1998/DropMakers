import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleResultsAcionCreater } from '../../../store/actions/results';

import { Select } from 'antd';

const { Option } = Select;

const Search = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(handleResultsAcionCreater(value))  
  }

  return (
    <form className='search-product'>
      <div className='search-title'>Item URL</div>
      <div className='select-wrapper'>
        <Select 
          defaultValue="lucy" 
          bordered={false} 
          dropdownClassName='dropdown' 
          className='select' 
          >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <button className='btn' onClick={(e) => handleSearch(e)}>START SEARCH</button>
      </div>
      <input className='search-input' placeholder='Item listing URL or item ID' onChange={(e) => setValue(e.target.value)}/>
    </form>
  )
}

export default Search
