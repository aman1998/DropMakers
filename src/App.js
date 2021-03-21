import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileActionCreator } from './store/actions/profile';

import 'antd/dist/antd.css';
import './assets/styles/styles.scss';

import MainPage from './pages/MainPage';


const App = () => {
  const {isLog} = useSelector(state => ({
    isLog: state.profile.isLog
  }))

  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(handleProfileActionCreator())
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App


