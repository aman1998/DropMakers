import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { ButtonBackPage } from '../components/';

const StorePage = () => {
  return (
    <PrivatePageTemplate>
      <section className='store container'>
        <div className='store-header'>
          <ButtonBackPage />
          <div>Connected Accounts</div>
        </div>
        <div className='store-item amazon'>
          <div className='store-item-title'>amazon</div>
          <div className='store-item-content'>
            <div className='name'>Joe Doe</div>
            <button className='btn'>Connect</button>
          </div>
        </div>
        <div className='store-item ebay'>
          <div className='store-item-title'>eBuy</div>
          <div className='store-item-content'>
            <div className='name'>Joe Doe</div>
            <button className='btn'>Connect</button>
          </div>
        </div>
        <div className='pay-methods'>
          <div className='title'>Payment Methods</div>
          <button className='btn'>Connect</button>
          {/* <div className='store-item-content pay-method'>
            <div className='name'>Payment Methods</div>
            <button className='btn'>Connect</button>
          </div> */}
        </div>
      </section>
    </PrivatePageTemplate>
  )
}

export default StorePage
