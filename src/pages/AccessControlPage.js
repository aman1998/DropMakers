import React, {useState} from 'react';
import { Modal } from 'antd';

import PrivatePageTemplate from '../components/Template/PrivatePageTemplate';
import { ButtonBackPage } from '../components/';

const AccessControlPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <PrivatePageTemplate>
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
      </section>
      <Modal 
        visible={isModalVisible} 
        footer={null}
        className='modal'
        onOk={handleOk} 
        onCancel={handleCancel}
        >
        <div className='modal-title'>Provide Access</div>
        <div className='modal-text'>Dropmakers user email, that you want to provide access to</div>
        <input placeholder='Email' className='modal-input'/>
        <div className='modal-btns'>
          <button onClick={handleOk} className='btn'>Add</button>
          <button onClick={handleCancel} className='btn'>Cancel</button>
        </div>
      </Modal>
    </PrivatePageTemplate>
  )
}

export default AccessControlPage
