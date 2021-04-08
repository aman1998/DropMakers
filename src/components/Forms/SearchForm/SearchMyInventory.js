import React from 'react';
import { Select, InputNumber } from 'antd';

const { Option } = Select;

const SearchMyInventory = () => {
  return (
    <form className='search-myinventory'>
      <div className='search-myinventory-left'>
        <div className='div'></div>
        <Select defaultValue="Active" dropdownClassName='dropdown' className='select'>
          <Option value="Active">Active</Option>
          <Option value="Out of Stoke">Out of Stoke</Option>
          <Option value="Unprofitable">Unprofitable</Option>
          <Option value="With Errors">With Errors</Option>
          <Option value="Archived">Archived</Option>
        </Select>
        <input placeholder='Search' className='search-input' />
        <div className='text'>0 of 500 inventory links </div>
      </div>
      <div className='search-myinventory-right'>
        <div className='text'>Sort by</div>
        <Select defaultValue="Created At" dropdownClassName='dropdown' className='select'>
          <Option value="Created At">Created At</Option>
        </Select>
        <InputNumber min={1} defaultValue={3} className='number'/>
      </div>
    </form>
  )
}

export default SearchMyInventory
