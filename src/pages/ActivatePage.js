import React, {useEffect} from 'react';
import { useParams,  useHistory } from 'react-router-dom';


import { auth } from '../axios/axios'

const ActivatePage = () => {
  const { uid, token } = useParams()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('');
  }

  console.log(uid, token)
  useEffect(() => {
    auth.post('/users/activation/', {uid, token})
      .then((res) => {
        console.log(res)
        setTimeout(handleRedirect, 3000)
      })
      .catch((e) => {
        console.log('error', e)
      })
  }, [])
  

  return (
    <section className='container' style={{paddingTop: '10px'}}>
      Вы успешно активированы
    </section>
  )
}

export default ActivatePage




