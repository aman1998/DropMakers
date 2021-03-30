import React from 'react';
import { Select,  InputNumber, DatePicker, Space } from 'antd';
import moment from 'moment';

const { Option } = Select;

const SearchOrder = () => {
  const dateFormat = 'DD/MM/YYYY';

  return (
    <div className='search-order'>
      <div className='search-left'>
        <div className='div'></div>
        <Select defaultValue="Unshipped" dropdownClassName='dropdown' className='select'>
          <Option value="Non-cancelled">Non-cancelled</Option>
          <Option value="Unshipped">Unshipped</Option>
          <Option value="Mareked">Mareked</Option>
          <Option value="Need attention">Need attention</Option>
          <Option value="With problems">With problems</Option>
          <Option value="Not back ordered">Not back ordered</Option>
        </Select>
        <DatePicker defaultValue={moment('01/01/2015', dateFormat)} format={dateFormat} className='date-1'/>
        <DatePicker defaultValue={moment('01/01/2015', dateFormat)} format={dateFormat} className='date-2'/>
      </div>
      <div className='search-right'>
        <input className='input' placeholder='Search' />
        <InputNumber min={1} defaultValue={3} className='number'/>
      </div>
    </div>
  )
}

export default SearchOrder
