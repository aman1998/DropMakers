import React from 'react';
import { useSelector } from 'react-redux';

import UserIcon from '../../assets/images/user.png'

const ProfileSttings = () => {
  const { email, first_name, last_name, city, country, phone, picture } = useSelector( state => ({
    email: state.profile.myProfile.email,
    first_name: state.profile.myProfile.first_name,
    last_name: state.profile.myProfile.last_name,
    city: state.profile.myProfile.city,
    country: state.profile.myProfile.country,
    phone: state.profile.myProfile.phone,
    picture: state.profile.myProfile.picture,
  }))

  return (
    <form className='settings-form'>
     <div className='data'>
        <label className='data-item'>
          <div className='data-item-title'>Email</div>
          <input className='input' defaultValue={email}/>
        </label>
        <label className='data-item'>
          <div className='data-item-title'>First name/ Last name</div>
          <div className='input-wrapper'>
            <input className='input' defaultValue={first_name}/>
            <input className='input' defaultValue={last_name}/>
          </div>
        </label>
        <label className='data-item'>
          <div className='data-item-title'>Location</div>
          <div className='input-wrapper'>
            <input className='input' defaultValue={country}/>
            <input className='input' defaultValue={city}/>
          </div>
        </label>
        <label className='data-item'>
          <div className='data-item-title'>Dafault number</div>
          <input className='input' defaultValue={phone}/>
        </label>
        <label className='data-item'>
          <div className='data-item-title'>Language</div>
          <input className='input' />
        </label>
        <label className='data-item'>
          <div className='data-item-title'>New password</div>
          <div className='input-wrapper'>
            <input className='input'/>
            <input className='input'/>
          </div>
        </label>
     </div>
     <div className='avatar'>
       <img src={UserIcon} className='avatar-icon' alt='user'/>
       <button className='avatar-btn'>Change</button>
     </div>
    </form>
  )
}

export default ProfileSttings
