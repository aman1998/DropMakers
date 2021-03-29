import React from 'react';
import { NavLink } from 'react-router-dom';

const Notifications = () => {
  return (
    <section className='notifications'>
      <div className='notifications-header'>
        <h2 className='title'>Notifications</h2>
        <div className='link'><NavLink to='/notifications' exact>View All Notifications</NavLink></div>
      </div>
      <div className='notifications-no'>No notifications yet</div>
    </section>
  )
}

export default Notifications
