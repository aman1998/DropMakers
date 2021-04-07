import React from 'react';
import { useHistory} from 'react-router-dom';

const ButtonBackPage = () => {

  let history = useHistory();

  const handleBackPage = () => {
    history.goBack()
  }

  return (
    <button className='btn-back' onClick={handleBackPage}>Back</button>
  )
}

export default ButtonBackPage
