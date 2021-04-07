import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';

const PaymentsPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='payments container'>
        <h1 className='left title'>Billing & Payment</h1>
        <div className='right'>
          <div>Balance</div>
          <div className='count'>0$</div>
        </div>
      </section>
    </PrivatePageTemplate>
  )
}

export default PaymentsPage
