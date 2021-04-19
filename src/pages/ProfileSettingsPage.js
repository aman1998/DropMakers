import React from 'react';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { ProfileSettings, ButtonBackPage, PasswordSettings, EmailSettings } from '../components/';

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
        <h2 className='title-2'>Change Email</h2>
        <EmailSettings />
        <h2 className='title-2'>Change Password</h2>
        <PasswordSettings />
      </section>
    </PrivatePageTemplate>
  )
}

export default ProfileSettingsPage
