import React, {useEffect} from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleActivateActionCreator } from '../store/actions/activate';

import { Footer } from '../components/';

import Logo from '../assets/images/logo.png';

const ActivatePage = () => {
  const {loading, success, failed, theme} = useSelector(state => ({
    success: state.activate.post.success,
    loading: state.activate.post.loading,
    failed: state.activate.post.failed,
    theme: state.themeSwitcher.theme
  }))

  const { uid, token } = useParams()
  const dispatch = useDispatch()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('');
  }
  useEffect(() => {
   dispatch(handleActivateActionCreator(uid, token, handleRedirect))
  }, [dispatch, uid, token])
  

  return (
    <div className={`page ${theme === 'dark' && 'theme-dark'}`}>
      <header className='activation-header'>
        <div className='container'>
          <NavLink to='/' exact><img src={Logo} className='logo' alt='logo' /></NavLink>
        </div>
      </header>
      <section className='activation-content container'>
        {
          loading ? 'loading' :
          success ? 
          <>
            <h1 className='title'>Welcome to <span>DropMakers</span>!</h1>
            <p className='text'>Thank you, your account has been successfully created</p>
          </> :
          failed ? <p className='text'>Something went wrong, please try refreshing the page</p> : null
        }
      </section>
      <Footer />
    </div>
  )
}

export default ActivatePage




