import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { SearchNotifications } from '../components/';

const NotificationsPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='notifications container'>
        <div className='notifications-header'>
          <button className='btn'>Back</button>
          <h1 className='title'>Notifications</h1>
        </div>
        <SearchNotifications />
      </section>
    </PrivatePageTemplate>
  )
}

export default NotificationsPage
