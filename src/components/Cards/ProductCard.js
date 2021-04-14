import React from 'react';
import { Rate } from 'antd';

import Photo from '../../assets/images/photo4.png';

const ProductCard = ({title, price, avatar, avalible, country, link}) => {
  return (
    <div className='product-card'>
      <div>
        <img src={avatar || Photo} alt='product' className='image' />
        <a className='link' href={link || '/'} target='_blank' rel="noreferrer">more</a>
      </div>
      <div className='content'>
        <div className='product-title'>
          {title}
        {/* Summer My Size Potty, Pink – Realistic Potty Training Toilet Looks and Feels Like an Adult Toilet – Easy to Empty and Clean */}
        </div>
        <div className='product-info'>
          <div className='info-left'>
            {/* <div>Protection <span>unbranded</span></div> */}
            <div>{price}$</div>
            <div>Cost <span>{price}$</span></div>
            <div>Ship <span>0$</span></div>
          </div>
          <div className='info-right'>
            <div className='info-item'>
              <div className='item-title'>Country</div>
              <div className='item-count'>{country}</div>
            </div>
            <div className='info-item'>
              <div className='item-title'>Available</div>
              <div className='item-count'>{avalible}</div>
            </div>
            <div className='info-item'>
              <Rate disabled defaultValue={2} />
              <div className='item-count'>2</div>
            </div>
            {/* <div className='info-item'>
              <div className='item-title'>reviews</div>
              <div className='item-count'>5</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
