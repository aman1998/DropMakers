import React from 'react';

import Photo from '../../assets/images/photo2.png';

const OrderCard = () => {
  return (
    <div className='order-card'>
      <div className='order-header'>
        <div>#123-12345645-1234567</div>
        <div>02 February 2020</div>
      </div>
      <div className='order-content'>
        <div className='content-left'>
          <img src={Photo}  className='image' />
          <div>
            <div className='item item-1'>
              <div>Quan 2</div>
              <div>Summer My Size Potty, Pink – Realistic Potty Training Toilet Looks and Feels Like an Adult Toilet – Easy to Empty and Clean</div>
            </div>
            <div className='item item-2'>
              <div className='item-left'>Amount in order</div>
              <div>40$</div>
            </div>
            <div className='item item-3'>
              <div className='item-left'>Reason</div>
              <div>Reason</div>
            </div>
            <div className='item item-4'>
              <div className='item-left'>Customer</div>
              <div>Joe Doe</div>
            </div>
            <div className='item item-5'>
              <div className='item-left'>Problems</div>
              <div>Indicate problems</div>
            </div>
          </div>
        </div>
        <div className='content-right'>
          <button className='btn'>Confirm</button>
          <button className='btn'>dispatch pending</button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
