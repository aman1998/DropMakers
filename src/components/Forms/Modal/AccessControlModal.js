import React, {useState} from 'react';
import { handleAddControlActionCreator } from '../../../store/actions/accessControl';
import { useDispatch } from 'react-redux';

import { Modal, Select } from 'antd';
const { Option } = Select;

const AccessControlModal = ({isModalVisible, setIsModalVisible, setReload}) => {
  const [performer_email, setPerformerEmail] = useState('')

  const dispatch = useDispatch()
  
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleAddAccessControl = (e) => {
    e.preventDefault()
    dispatch(handleAddControlActionCreator(performer_email, setIsModalVisible, setReload))
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal 
      visible={isModalVisible} 
      footer={null}
      className='modal'
      onOk={handleOk} 
      onCancel={handleCancel}
      >
      <div className='modal-title'>Provide Access</div>
      <div className='modal-text'>Dropmakers user email, that you want to provide access to</div>
      <form onSubmit={(e) => handleAddAccessControl(e)}>
        <input 
          placeholder='Email' 
          className='modal-input' 
          type='email'
          onChange={(e) => setPerformerEmail(e.target.value)}
          />
        <div className='modal-btns'>
          <button type='submit' className='btn'>Add</button>
          <div onClick={handleCancel} className='btn'>Cancel</div>
        </div>
      </form>
    </Modal>
  )
}

export default AccessControlModal
