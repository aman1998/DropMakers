import React from 'react';

import { PrivatePageTemplate, SearchLists } from '../components/';

const InventoryListsPage = ({title}) => {
  return (
    <PrivatePageTemplate>
      <section className='inventory-lists container'>
        <h1 className='title'>{title} Lists</h1>
        <p className='text text--1'>Configure black lists of unsafe brands, eBay sellers and Amazon sellers:</p>
        <p className='text'>Brand – Additional personal list of unsafe brands</p>
        <p className='text'>eBay Seller – Personal blacklist of eBay sellers (highlighted red in search results)</p>
        <p className='text text--4'>Amazon Seller – Personal blacklist of Amazon sellers (listing is highlighted red if such seller is on the listing) </p>
        <SearchLists />
      </section>
    </PrivatePageTemplate>
  )
}

export default InventoryListsPage
