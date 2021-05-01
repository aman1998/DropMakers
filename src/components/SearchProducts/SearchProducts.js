import React from 'react';
import { useSelector } from 'react-redux';

import { SearchProduct, ProductCard } from '../index';

const SearchProducts = () => {
  const {results, loading, success, failed} = useSelector(state => ({
    results: state.results.results,
    loading: state.results.get.loading,
    success: state.results.get.success,
    failed: state.results.get.failed,
  }))

  return (
    <section className='container search-wrapper'>
      <h1 className='title'>Single Item Search</h1>
      <SearchProduct />
      {
        loading ? 
        <div className='fallback-loading'></div> :
        success ? 
        <div className='search-result'>
            <div className='ebay item'>
              <div className='result-title'>eBay</div>
              {
                results.map(item => (
                  <ProductCard 
                    avatar={item.galleryURL} 
                    title={item.title}
                    price={item.sellingStatus.currentPrice['#text']}
                    key={item.itemId}
                    avalible={item.listingInfo.buyItNowAvailable}
                    country={item.country}
                    link={item.viewItemURL}
                    />
                )) 
              }
            </div>
            <div className='amazon item'>
              <div className='result-title'>Amazon</div>
              <div className='product-card'></div>
              {/* <ProductCard /> */}
            </div>
          </div> : 
        failed ?
        <div>failed</div> : null
      }
    </section>
  )
}

export default SearchProducts
