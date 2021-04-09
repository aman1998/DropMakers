import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SearchInventoryChanges = () => {
  return (
    <form className='search-inventory-changes'>
      <div className='left'>
        <Select defaultValue="Unresolved" dropdownClassName='dropdown' className='select'>
          <Option value="Unresolved">Unresolved</Option>
          <Option value="Accepted">Accepted</Option>
          <Option value="Deleted">Deleted</Option>
        </Select>
        <input placeholder='Search' className='input'/>
        <div className='left-text'>0 changes</div>
      </div>
      <div className='right'>
        <button className='btn'>Accept All</button>
        <button className='btn btn--yellow'>Delete All</button>
      </div>
    </form>
  )
}

export default SearchInventoryChanges
