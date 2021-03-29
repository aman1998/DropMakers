import React from 'react';

const Circle = () => {
  const circleItem = [
    {id: 1, status: 'Profit', count: '0', title: 'Inventory Links', text: 'Active'},
    {id: 2, status: 'Revenue', count: '0', title: 'Orders Awaiting', text: 'Shipping'},
    {id: 3, status: 'Revenue', count: '0', title: 'Orders Require', text: 'Attention'},
    {id: 4, status: 'Revenue', count: '0d 0h', title: 'Average', text: 'Shipping Delay'},
    {id: 5, status: 'Revenue', count: '0', title: 'Average', text: 'Orders per Day'},
    {id: 6, status: 'Revenue', count: '0$', title: 'Revenue', text: 'For last 30 days'},
    {id: 7, status: 'Revenue', count: '0$', title: 'Expenses', text: 'For last 30 days'},
    {id: 8, status: 'Revenue', count: '0$', title: 'New Profit', text: 'For last 30 days'},
    {id: 9, status: 'Profit', count: '0%', title: 'ROI', text: 'For last 30 days'},
    {id: 10, status: 'Revenue', count: '0', title: 'Orders Awaiting', text: 'Shipping'},
  ]
  return (
    <section className='circles'>
      {
        circleItem.map(item => (
          <div className='item' key={item.id}>
            <div className={`circle ${item.status === 'Profit' ? 'yellow' : 'blue'}`}>{item.count}</div>
            <p className='title'>{item.title}</p>
            <p className='text'>{item.text}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Circle
