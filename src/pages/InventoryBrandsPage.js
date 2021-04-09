import React from 'react';

import { PrivatePageTemplate, ButtonBackPage, BrandCard } from '../components/';

const InventoryBrandsPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='inventory-brands container'>
        <div className='inventory-brands-header'>
          <ButtonBackPage />
          <h1 className='title'>Brands</h1>
        </div>
        <p className='text'>List of all brands for your inventory links and Amazon listings</p>
        <div className='cards'>
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </div>
      </section>
    </PrivatePageTemplate>
  )
}

export default InventoryBrandsPage
