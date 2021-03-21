import React from 'react';

import { SearchIcon, SendIcon, SettingsIcon } from '../index';

const Description = () => {

  const descriptions = [
    {title: 'Easy Setup', text: 'Set up your account with ease and start dropshipping right away!', icon: <SettingsIcon />},
    {title: 'Advanced Search', text: 'A high quality search engine helps you find dozens of pricing opportunities on eBay and Amazon in minutes.', icon: <SearchIcon />},
    {title: 'Automated Orders', text: 'EBay Order Tracking & Amazon Auto Delivery Confirmation', icon: <SendIcon />}
  ]

  return (
    <div className='description'>
      <div className='description-item container'>
        {descriptions.map(item => (
          <div className='item' key={item.title}>
            <div className='item-icon'>{item.icon}</div>
            <h2 className='item-title'>{item.title}</h2>
            <p className='item-text'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Description
