import React from 'react';

import { SignIn, SignUp } from '../../';
import { Drawer } from 'antd';

const SignForm = ({setVisible, setSignUp, visible, signUp}) => {

  const onClose = () => {
    setVisible(false)
    setSignUp(true)
  };

  return (
    <Drawer
      width='100%'
      height='100%'
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      >
        {signUp ? <SignUp setSignUp={setSignUp} /> : <SignIn setSignUp={setSignUp} />}
    </Drawer>
  )
}

export default SignForm
