import React from 'react';
import { Route } from 'react-router-dom';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { Sidebar, SearchMail } from '../components/';

const MailPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='mail container'>
        <div className='mail-header'>
          <div>My Mailbox</div>
          <div>example@example.com</div>
        </div>
        <SearchMail />
        <div className='mail-content'>
          <Sidebar />
          <div className='letters'>
            <Route path='/mail' exact>No emails to show</Route>
            <Route path='/mail/other' exact>No other to show</Route>
            <Route path='/mail/send' exact>No send to show</Route>
            <Route path='/mail/replies' exact>No replies to show</Route>
            <Route path='/mail/direct' exact>No direct to show</Route>
            <Route path='/mail/automatic' exact>No automatic to show</Route>
          </div>
        </div>
      </section>
    </PrivatePageTemplate>
  )
}

export default MailPage
