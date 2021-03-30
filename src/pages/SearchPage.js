import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { SearchProduct, ProductCard } from '../components/';

const SearchPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='container search-wrapper'>
        <h1 className='title'>Single Item Search</h1>
        <SearchProduct />
        <div className='search-result'>
          <div className='ebay item'>
            <div className='result-title'>eBuy</div>
            <ProductCard />
          </div>
          <div className='amazon item'>
            <div className='result-title'>Amazon</div>
            <ProductCard />
          </div>
        </div>
      </section>
    </PrivatePageTemplate>
  )
}

export default SearchPage
