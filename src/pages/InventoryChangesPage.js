import React from 'react';

import { PrivatePageTemplate, SearchInventoryChanges } from '../components/';

const InventoryChangesPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='inventory-changes container'>
        <h1 className='title'>Inventory Changes</h1>
        <p className='text'>
        Any eBay and Amazon listings changes in your inventory will be shown here (eg. brand, title, description, photos etc.) This way you will not miss any important change in your inventory listings, which may lead to problems in future (eg. seller changed listing completely or some listing details like brand, title or photos etc.) The affected item remains active in the inventory link until your decision
        </p>
        <SearchInventoryChanges />
      </section>
    </PrivatePageTemplate>
  )
}

export default InventoryChangesPage
