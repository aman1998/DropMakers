import React from 'react';

import { SearchIcon } from '../';

const Features = () => {
  const arr1 = [
    {icon: <SearchIcon />, text: 'Simultaneously searches eBay and Amazon marketplaces and automatically matches listings by titles and images', id: 1},
    {icon: <SearchIcon />, text: 'Searches for duplicate listings on Amazon to capture as much traffic as possible', id: 2},
    {icon: <SearchIcon />, text: 'Searches for other suppliers on eBay to provide multiple backup purchase options', id: 3},
    {icon: <SearchIcon />, text: 'Presents lots of listing details (sold count, quantity, BSR, offers count, FBA / Prime etc.)', id: 4},
    {icon: <SearchIcon />, text: 'Ranks eBay listings by title / image similarities, supplier ratings, sales and quantity', id: 5},
    {icon: <SearchIcon />, text: 'Intuitive drag & drop interface to fine-tune the automatic results (simply add / remove listings to link)', id: 6},
  ]
  const arr2 = [
    {icon: <SearchIcon />, text: 'Removes / re-adds your Amazon offers based on suppliers quantity and other factors', id: 1},
    {icon: <SearchIcon />, text: 'Reprices your Amazon offers to maintain desired position or if eBay supplier price changes', id: 2},
    {icon: <SearchIcon />, text: 'Maintains predefined profit factor and ensures your offers always remain profitable', id: 3},
  ]
  const arr3 = [
    {icon: <SearchIcon />, text: 'Retrieves new orders from Amazon and back-orders from eBay Automatically confirms shipping on Amazon when eBay seller ships Alerts you if shipping / delivery takes too long', id: 1},
    {icon: <SearchIcon />, text: 'Simple option to back-order linked items on eBay - just click Order and configure your purchase on eBay', id: 2},
    {icon: <SearchIcon />, text: 'Monitors order shipping status / delivery progress and alerts you if there is a problem (eg. tracking number is invalid, order stuck in pre-transit or in-transit state etc.)', id: 3},
    {icon: <SearchIcon />, text: 'Monitors order shipping status / delivery progress and alerts you if there is a problem (eg. tracking number is invalid, order stuck in pre-transit or in-transit state etc.)', id: 4},
  ]
  const arr4 = [
    {icon: <SearchIcon />, text: 'Keep track of performance, orders, notifications and current operations on the Dashboard', id: 1},
    {icon: <SearchIcon />, text: 'Detailed Sales report shows how your sales are going over any desired period, along with ROI and averages', id: 2},
    {icon: <SearchIcon />, text: 'Monitor and analyze your Amazon traffic and conversion for better understanding your buyer needs', id: 3},
  ]
  return (
    <section className='features container' id='features'>
      <div className='feature-1'>
        <h2 className='title'>Find Price Opportunities</h2>
        <p className='text'>
        Our unique full-text search and image recognition engine simultaneously 
        searches for price opportunities on eBay and Amazon and seamlessly links matching listings
        </p>
        <div className='items'>
          {arr1.map(item => (
            <div className='item' key={item.id}>
              <div className='icon'>{item.icon}</div>
              <div className='item-text'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='feature-2'>
        <h2 className='title'>Monitor Listing Changes</h2>
        <p className='text'>
        Our platform constantly monitors linked eBay and Amazon listings for price / quantity
        changes and takes appropriate actions if anything gets changed
        </p>
        <div className='items'>
          {arr2.map(item => (
            <div className='item' key={item.id}>
              <div className='icon'>{item.icon}</div>
              <div className='item-text'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='feature-3'>
        <h2 className='title'>Automate Your Orders</h2>
        <p className='text'>
        Receive new orders from Amazon, back-order them on eBay and just wait while the seller ships  
        the platform will retrieve tracking number and confirm shipping on Amazon
        This ensures fastest processing and provides best buyer experience
        </p>
        <div className='items'>
          {arr3.map(item => (
            <div className='item' key={item.id}>
              <div className='icon'>{item.icon}</div>
              <div className='item-text'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='feature-4'>
        <h2 className='title'>Monitor Your Growth and Performance</h2>
        <p className='text'>
        We offer a plenty of reporting tools and options for you to measure your dropshipping business growth and success
        </p>
        <div className='items'>
          {arr4.map(item => (
            <div className='item' key={item.id}>
              <div className='icon'>{item.icon}</div>
              <div className='item-text'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
