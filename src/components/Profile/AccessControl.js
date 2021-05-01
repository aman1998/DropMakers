import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetControlMeActionCreator, handleGetControlThemActionCreator } from '../../store/actions/accessControl';

import { ButtonBackPage, AccessControlModal, AccessControlCard } from '../index';

import { Select } from 'antd';

const { Option } = Select;


const AccessControl = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const [accessList, setAccessList] = useState('AccessThem')

  const {listControlMe, listControlThem, getMe, getThem} = useSelector(state => ({
    listControlMe: state.accessControl.accessControlListMe,
    listControlThem: state.accessControl.accessControlListThem,
    getMe: state.accessControl.getMe,
    getThem: state.accessControl.getThem,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    setReload(false)
    if(accessList === 'AccessMe') {
      dispatch(handleGetControlMeActionCreator(setReload))
    }
    if(accessList === 'AccessThem') {
      dispatch(handleGetControlThemActionCreator())
    }
  }, [accessList, reload])

  const showModal = () => {
    setIsModalVisible(true);
  };


function handleChange(value) {
  setAccessList(value)
}
console.log(listControlThem.length)

  return (
    <>
    <section className='access-control container'>
      <div className='access-control-header'>
        <div className='left'>
          <ButtonBackPage />
          <h1 className='title'>Access Control</h1>
        </div>
        <button className='right btn' onClick={showModal}>Add</button>
      </div>
      <p className='text'>
        Here you can configure limited access for your account managers and other users you want to provide access to your account. For more information please refer to the following article Setting up limited access to your account
      </p>
      <Select defaultValue="AccessThem" className='select' onChange={handleChange}>
        <Option value="AccessThem">AccessThem</Option>
        <Option value="AccessMe">AccessMe</Option>
      </Select>
      { accessList === 'AccessMe' ?
         (getMe.loading ? <div className='fallback-loading'></div> : 
          getMe.success && listControlMe.length > 0 ? 
          listControlMe.map((item) => (
            <AccessControlCard 
              key={item.id}
              id={item.id}
              type={2}
              setReload={setReload}
              email={item.performer_email}
              action={item.action}
            />
          )) : 
          getMe.success && listControlMe.length < 1 ? 
          <div>Здесь пусто</div> : null) : null
      }
      { accessList === 'AccessThem' ?
         (getThem.loading ? <div className='fallback-loading'></div> : 
         getThem.success && listControlThem.length > 0 ? 
          listControlThem.map((item) => (
            <AccessControlCard 
              key={item.id}
              id={item.id}
              type={1}
              email={item.target.email}
              action={item.action}
            />
          )) :
          getThem.success && listControlThem.length < 1 ? 
          <div>Здесь пусто</div> : null) : null
      }
    </section>
    <AccessControlModal 
      isModalVisible={isModalVisible}
      setReload={setReload}
      setIsModalVisible={setIsModalVisible}
    />
    </>
  )
}

export default AccessControl
