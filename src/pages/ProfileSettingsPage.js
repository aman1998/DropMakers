import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { ProfileSettings, ButtonBackPage } from '../components/';

const ProfileSettingsPage = () => {
  return (
    <PrivatePageTemplate>
      <section className='container profile-settings'>
        <div className='profile-settings-header'>
          <div className='left'>
            <ButtonBackPage />
            <h1 className='title'>Account Settings</h1>
          </div>
          <button className='right btn'>Log out on all devices</button>
        </div>
        <h2 className='title-2'>Profile Settings</h2>
        <ProfileSettings />
      </section>
    </PrivatePageTemplate>
  )
}

export default ProfileSettingsPage
