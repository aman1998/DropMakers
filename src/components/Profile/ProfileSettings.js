import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleChangeProfileActionCreator } from '../../store/actions/profile';
import { Select } from 'antd';

import { ButtonApi } from '../';
import UserIcon from '../../assets/images/user.png';

const { Option } = Select;

const ProfileSttings = () => {
  const { myProfile, loading, failed } = useSelector( state => ({
    myProfile: state.profile.myProfile,
    loading: state.profile.post.loading,
    failed: state.profile.post.failed,
  }))

  const [fileName, setFileName] = useState('')
  const [files, setFiles] = useState([])
  const [first_name, setFirstname] = useState('')
  const [last_name, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState(myProfile.country || '')

  const dispatch = useDispatch()

  const handleSelectCountry = (value) => {
    setCountry(value)
  }


  const handleChangeProfile = async (e) => {
    e.preventDefault()
    let image = files

    let formData = new FormData()
    if(files.length !== 0){
      formData.append('picture', image[0])
    }
    formData.append('first_name', first_name || myProfile.first_name)
    formData.append('last_name', last_name || myProfile.last_name)
    formData.append('phone', phone || myProfile.phone)
    formData.append('country', country)

    dispatch(handleChangeProfileActionCreator(formData, myProfile, {first_name, last_name, phone, country}))
  }

  const handleFile = (file, name) => {
    setFiles([file])
    setFileName(name)
  }

  return (
    <form className='settings-form' onSubmit={(e) => handleChangeProfile(e)}>
     <div className='data'>
        <label className='data-item'>
          <div className='data-item-title'>Email</div>
          <input className='input' defaultValue={myProfile.email}/>
        </label>
        <label className='data-item'>
          <div className='data-item-title'>First name/ Last name</div>
          <div className='input-wrapper'>
            <input 
              className='input' 
              defaultValue={myProfile.first_name} 
              placeholder='firstname'
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input 
              className='input' 
              placeholder='lastname'
              defaultValue={myProfile.last_name}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </label>
        <label className='data-item'>
          <div className='data-item-title'>Location</div>
          <Select 
            defaultValue={myProfile.country} 
            dropdownClassName='dropdown' 
            className='select input-wrapper' 
            onChange={handleSelectCountry}>
              <Option value="Russia">Russia</Option>
              <Option value="Kyrgyzstan">Kyrgyzstan</Option>
              <Option value="USA">USA</Option>
          </Select>
          {/* <div className='input-wrapper'>
            <input className='input' defaultValue={country}/>
            <input className='input' defaultValue={city}/>
          </div> */}
        </label>
        <label className='data-item'>
          <div className='data-item-title'>Phone</div>
          <input 
            className='input' 
            defaultValue={myProfile.phone} 
            placeholder='996 555 123 456' 
            type='number'
            onChange={(e) => setPhone(e.target.value)}
            />
        </label>
        {/* <label className='data-item'>
          <div className='data-item-title'>Language</div>
          <input className='input' />
        </label> */}
        <label className='data-item'>
          <div className='data-item-title'>New password</div>
          <div className='input-wrapper'>
            <input className='input' placeholder='new password'/>
            <input className='input' placeholder='confirm new password'/>
          </div>
        </label>
        <ButtonApi title={'Save'} loading={loading} failed={failed} />
     </div>
     <div className='avatar'>
       <img src={myProfile.picture || UserIcon} className='avatar-icon' alt='user'/>
       <label htmlFor='avatar-change' className='mini-title avatar-change'>
          <div className='avatar-btn'>Change</div>
        </label>
        <div className='avatar-title'>{fileName || 'Файл не выбран'}</div>
       <input
          id='avatar-change'
          className='input'
          type='file'
          name='avatar'
          accept='image/x-png,image/jpeg'
          className='avatar-btn'
          onChange={(e) => handleFile(e.target.files[0], e.target.files[0].name)}
        />
     </div>
    </form>
  )
}

export default ProfileSttings