import React from 'react';
import { Select } from 'antd';

import { PrivatePageTemplate, ButtonBackPage } from '../components/';

const { Option } = Select;

const ExportOrdersPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='export-order container'>
        <div className='export-order-header'>
          <ButtonBackPage />
          <h1 className='title'>Import Inventory from Orders History</h1>
        </div>
        <p className='text'>
        If you already work by eBay <span>{'>'}</span> Amazon model, the system can analyze your purchase history on all your active eBay accounts and compare it with your Amazon orders history. This way, the system can find and create accurate inventory links for you (for listings that you already sold and fulfilled before).
        </p>
        <p className='text'>
        You can scan your eBay accounts and check if there are missing inventory links, that you can then easily import (scanning only checks your accounts and does not do any importing without your prior consent, so you may try that now)
        </p>
        <div className='scan'>
          <div>For the last:</div>
          <Select defaultValue="5 days" dropdownClassName='dropdown' className='select'>
            <Option value="5 days">5 days</Option>
            <Option value="15 days">15 days</Option>
            <Option value="30 days">30 days</Option>
            <Option value="60 days">60 days</Option>
            <Option value="90 days">90 days</Option>
          </Select>
          <button className='btn'>Scan</button>
        </div>
      </section>
    </PrivatePageTemplate>
  )
}

export default ExportOrdersPage
