import React from 'react';

import Photo from '../../assets/images/photo2.png';
import {SearchIcon} from '../'

const Requirements = () => {
  return (
    <section className='requirements' id='requirements'>
      <div className='container'>
        <div className='requirements-content'>
          <h2 className='title'>Requirements</h2>
          <p className='text'>All you need to start working is:</p>
          <div className='item'>
            <div className='icon'><SearchIcon /></div>
            <div className='right'>
              <div className='right-title'>Amazon Professional Seller</div>
              <div className='right-text'>For managing your inventory and orders via the Amazon API</div>
            </div>
          </div>
          <div className='item'>
            <div className='icon'><SearchIcon /></div>
            <div className='right'>
              <div className='right-title'>Amazon Professional Seller</div>
              <div className='right-text'>For managing your inventory and orders via the Amazon API</div>
            </div>
          </div>
        </div>
        <img src={Photo} alt='requirement' className='image'/>
      </div>
    </section>
  )
}

export default Requirements
