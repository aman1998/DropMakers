import React from 'react';

const Steps = () => {

  const steps = [
    {number: '1', title: 'Connect and Setup', text: 'Seamlessly connect your Amazon, eBay and PayPal accounts. Configure your default settingslike Minimum Profit per item, offer position, Fulfillment Period, email templates etc.'},
    {number: '2', title: 'Search and Add Price Opportunities', text: 'Use our high-end search engine to seamlessly find price opportunities on eBay and Amazon and link them in your account. We will automatically monitor the items on eBay and Amazon to reprice / remove / re-add your Amazon offers when needed'},
    {number: '3', title: 'Back-order on eBay', text: 'When order arrives, back-order the linked item on eBay - and we monitor the purchase and confirm shipping on Amazon when eBay supplier ships'},
    {number: '4', title: 'Profit', text: 'Enjoy your profit growing! Observe your sales statistics, Amazon traffic overview and orders performance, and relax. We do 95% of all work for you!'}
  ]

  return (
    <div className='steps' id='steps'>
      <div className='steps-item container'>
        {steps.map(item => (
          <div className='item' key={item.number}>
            <div className='item-number'>{item.number}</div>
            <h2 className='item-title'>{item.title}</h2>
            <p className='item-text'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
