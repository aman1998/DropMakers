import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const eBay = () => {
  return (
    <Select defaultValue={215} dropdownClassName='dropdown' className='select'>
      <Option value={215}>Russia</Option>
      <Option value="0">USA</Option>
      <Option value="2">Canada</Option>
    </Select>
  )
}

export default eBay
