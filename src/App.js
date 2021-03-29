import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileActionCreator } from './store/actions/profile';
import { GET_PROFILE_FAILED } from './store/actionTypes';

import 'antd/dist/antd.css';
import './assets/styles/styles.scss';

import { MainPage, DashboardPage, ActivatePage } from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';


const App = () => {
  const {isLog} = useSelector( state => ({
    isLog: state.profile.isLog
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(handleProfileActionCreator())
    }
    else dispatch({ type: GET_PROFILE_FAILED })
  }, [isLog])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <PrivateRoute exact path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <Route path="/activation/:uid/:token" component={ActivatePage} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App


