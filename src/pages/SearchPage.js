import React from 'react';
import { useSelector } from 'react-redux';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { SearchProduct, ProductCard } from '../components/';

const SearchPage = () => {
  const {results, loading, success, failed} = useSelector(state => ({
    results: state.results.results,
    loading: state.results.get.loading,
    success: state.results.get.success,
    failed: state.results.get.failed,
  }))

  console.log(results) 

  return (
    <PrivatePageTemplate>
      <section className='container search-wrapper'>
        <h1 className='title'>Single Item Search</h1>
        <SearchProduct />
        {
          loading ? 
          <div>searching</div> :
          success ? 
          <div className='search-result'>
              <div className='ebay item'>
                <div className='result-title'>eBuy</div>
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
          <div>failed</div> :
          <div></div>
        }
      </section>
    </PrivatePageTemplate>
  )
}

export default SearchPage
