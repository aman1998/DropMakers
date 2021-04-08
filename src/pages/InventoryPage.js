import React from 'react';

import { PrivatePageTemplate, SearchMyInventory, MyinventoryCard } from '../components/';

const InventoryPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='myinventory container'>
        <div className='myinventory-header'>
          <h1 className='title'>My Inventory</h1>
          <div className='myinventory-header-right'>
            <div>All settings groups </div>
            <button className='btn'>CREATE</button>
          </div>
        </div>
        <SearchMyInventory />
        <MyinventoryCard />
        <MyinventoryCard />
      </section>
    </PrivatePageTemplate>
  )
}

export default InventoryPage
