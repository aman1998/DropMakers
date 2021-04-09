import React from 'react';import { Select } from 'antd';

const { Option } = Select;

const SearchLists = () => {
  return (
    <div className='search-list'>
      <div className='safe'>Safe - 0%</div>
      <form className='form'>
        <div className='left'>
          <div>Filter</div>
          <Select defaultValue="Unresolved" dropdownClassName='dropdown' className='select'>
            <Option value="Unresolved">Unresolved</Option>
            <Option value="Accepted">Accepted</Option>
            <Option value="Deleted">Deleted</Option>
          </Select>
        </div>
        <input placeholder='Search' className='search-input'/>
      </form>
      <div className='info'>
        <div className='info-1'>Added At</div>
        <div className='info-2'>Title</div>
        <div className='info-3'>Comment</div>
      </div>
      <div className='entries'>No entries</div>
    </div>
  )
}

export default SearchLists
