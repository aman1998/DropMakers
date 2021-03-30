import React from 'react';
import { Rate } from 'antd';

import Photo from '../../assets/images/photo4.png';

const ProductCard = () => {
  return (
    <div className='product-card'>
      <img src={Photo} alt='product' className='image' />
      <div className='content'>
        <div className='product-title'>
        Summer My Size Potty, Pink – Realistic Potty Training Toilet Looks and Feels Like an Adult Toilet – Easy to Empty and Clean
        </div>
        <div className='product-info'>
          <div className='info-left'>
            <div>Protection <span>unbranded</span></div>
            <div>22.90$</div>
            <div>Cost <span>22.90$</span></div>
            <div>Ship <span>0$</span></div>
          </div>
          <div className='info-right'>
            <div className='info-item'>
              <div className='item-title'>Sold</div>
              <div className='item-count'>592</div>
            </div>
            <div className='info-item'>
              <div className='item-title'>Available</div>
              <div className='item-count'>132</div>
            </div>
            <div className='info-item'>
              <Rate disabled defaultValue={2} />
              <div className='item-count'>2</div>
            </div>
            <div className='info-item'>
              <div className='item-title'>reviews</div>
              <div className='item-count'>5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
