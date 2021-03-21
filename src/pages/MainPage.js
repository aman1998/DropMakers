import React from 'react';

import { PageTemplate, Description, Steps, Features, Requirements, Login, About, ContactsForm }  from '../components';

const MainPage = () => {
  return (
    <PageTemplate>
      <Description />
      <Steps />
      <Features />
      <Requirements />
      <Login />
      <About />
      <ContactsForm />
    </PageTemplate>
  )
}

export default MainPage