import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

const Search = () => {
  return (
    <form className='search-product'>
      <div className='search-title'>Item URL</div>
      <div className='select-wrapper'>
        <Select defaultValue="lucy" bordered={false} dropdownClassName='dropdown' className='select'>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <button className='btn'>START SEARCH</button>
      </div>
      <input className='search-input' placeholder='Item listing URL or item ID'/>
    </form>
  )
}

export default Search
