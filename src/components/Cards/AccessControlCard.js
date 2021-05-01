import React from 'react';
import { handleDeleteControlActionCreator } from '../../store/actions/accessControl';
import { useDispatch } from 'react-redux';

import { Button, Popconfirm } from 'antd';

const AccessControlCard = ({email, type, id, setReload}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
   dispatch(handleDeleteControlActionCreator(id, setReload))
  }
  
  function cancel(e) {
    console.log(e);
  }

  return (
    <div className='accessControl-card'>
      <div>{email}</div>
      {
        type === 1 ? 
        <button className='btn'>Edit</button> :
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={handleDelete}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      }
      {/* <button className='btn'>{type === 1 ? 'Изменить' : 'Удалить'}</button> */}
    </div>
  )
}

export default AccessControlCard
