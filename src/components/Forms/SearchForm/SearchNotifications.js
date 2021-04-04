import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SearchNotifications = () => {
  return (
    <form className='search-notification'>
      <div className='left'>
        <div className='text-1'>Filters</div>
        <Select defaultValue="General" bordered={false} dropdownClassName='dropdown' className='select'>
          <Option value="General">General</Option>
          <Option value="Pricing">Pricing</Option>
        </Select>
        <div className='text-2'>Showing up to 25,000 last notifications</div>
      </div>
      <div className='right'>
        <input placeholder='Search' className='search-input' />
      </div>
    </form>
  )
}

export default SearchNotifications
