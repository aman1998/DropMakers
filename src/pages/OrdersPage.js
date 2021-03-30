import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { SearchOrder } from '../components/';

const OrdersPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='orders container'>
        <div className='orders-header'>
          <h1>My Orders</h1>
          <div className='header-right'>
            <div className='item'>
              <div>Expected Revenue</div>
              <div className='count'>$0.00</div>
            </div>
            <div className='item'>
              <div>Pledged Funds</div>
              <div className='count'>$0.00</div>
            </div>
          </div>
        </div>
        <SearchOrder />
      </section>
    </PrivatePageTemplate>
  )
}

export default OrdersPage
