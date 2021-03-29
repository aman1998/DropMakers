import React from 'react';

import { PrivatePageTemplate } from '../components/';
import { Circle, Notifications } from '../components/'

const DashboardPage = () => {
  return (
    <PrivatePageTemplate>
      <Circle />
      <div className='container dashboard'>
        <Notifications />
        <Notifications />
      </div>
    </PrivatePageTemplate>
  )
}

export default DashboardPage
