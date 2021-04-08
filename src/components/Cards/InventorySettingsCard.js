import React from 'react';

const MyinventorySettingsCard = () => {
  return (
    <div className='inventorySettings-card'>
      <div className='item item--1'>
        <div>active links</div>
        <div>0</div>
      </div>
      <div className='item item--2'>
        <div className='first'>Default</div>
        <div>Profit</div>
        <div>Strategy</div>
        <div className='last'>Repricing Step</div>
      </div>
      <div className='item item--3'>
        <div></div>
        <div>15% – No Limit</div>
        <div>Best Possible Position     1 – 10</div>
      </div>
      <div className='item item--4'>
        <div></div>
        <div>
          <div>Fulfillment Period</div>
          <div>5 days</div>
        </div>
        <div>
          <div>Shipping Template </div>
          <div>Default</div>
        </div>
      </div>
      <div className='item item--5'>
        <div>edit</div>
        <div>disable</div>
      </div>
    </div>
  )
}

export default MyinventorySettingsCard
