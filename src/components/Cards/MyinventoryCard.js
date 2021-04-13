import React from 'react';

import Photo from '../../assets/images/photo2.png';

const MyinventoryCard = () => {
  return (
    <div className='myinventory-card'>
      <div className='myinventory-card-left'>
        <img src={Photo} className='image' alt='myinventory' />
        <div className='content'>
          <div className='title'>
            Summer My Size Potty, Pink – Realistic Potty Training Toilet Looks and Feels Like an Adult Toilet – Easy to Empty and Clean
          </div>
          <div className='info'>
            <div className='info-item'>
              <div className='info-item-title'>eBuy</div>
              <div className='info-item-count'>40$</div>
            </div>
            <div className='info-item'>
              <div className='info-item-title'>Amazon</div>
              <div className='info-item-count'>50$</div>
            </div>
            <div className='info-item'>
              <div className='info-item-title'>Profit</div>
              <div className='info-item-count'>30$</div>
            </div>
            <div className='info-item'>
              <div className='info-item-title'>ROI</div>
              <div className='info-item-count'>50%</div>
            </div>
            <div className='info-item'>
              <div className='info-item-title'>Sales</div>
              <div className='info-item-count'>0</div>
            </div>
            <div className='info-item'>
              <div className='info-item-title'>Traffic/ BB</div>
              <div className='info-item-count'>3.5</div>
            </div>
          </div>
        </div>
      </div>
      <div className='myinventory-card-right'>
        <div className='btns'>
          <button className='edit'>edit</button>
          <button className='disable'>disable</button>
          <button className='archive'>archive</button>
        </div>
        <button className='btn'>Active</button>
      </div>
    </div>
  )
}

export default MyinventoryCard
