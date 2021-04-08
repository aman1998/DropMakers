import React from 'react';

import { PrivatePageTemplate, InventorySettingsCard } from '../components/';


const InventorySettingsPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='inventory-settings container'>
        <h1 className='title'>Inventory Settings Groups</h1>
        <p className='text'>
        Inventory link settings groups allow you to configure pricing and other settings for groups of inventory links. You can now build flexible configurations with different settings for your individual scenarious
        </p>
        <InventorySettingsCard />
        <InventorySettingsCard />
      </section>
    </PrivatePageTemplate>
  )
}

export default InventorySettingsPage
