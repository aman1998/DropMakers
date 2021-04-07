import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { SearchOrder, OrderCard } from '../components/';

const OrdersReturnsPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='orders-returns container'>
        <div className='orders-returns-header'>
          <h1 className='title'>Order Returns</h1>
          <button className='btn'>Refresh</button>
        </div>
        <SearchOrder />
        <OrderCard />
      </section>
    </PrivatePageTemplate>
  )
}

export default OrdersReturnsPage
