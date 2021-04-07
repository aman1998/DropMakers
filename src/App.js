import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileActionCreator } from './store/actions/profile';
import { GET_PROFILE_FAILED } from './store/actionTypes';

import 'antd/dist/antd.css';
import './assets/styles/styles.scss';

import { MainPage, DashboardPage, ActivatePage, SearchPage, NotificationsPage, OrdersPage,
        MailPage, ProfileSettingsPage, PaymentsPage, AccessControlPage, OrdersReturnsPage,
        StorePage } from './routes/routes';
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

  const privateRoutes = [
    {path: '/dashboard', component: <DashboardPage />},
    {path: '/search', component: <SearchPage />},
    {path: '/notifications', component: <NotificationsPage />},
    {path: '/myorders', component: <OrdersPage />},
    {path: '/myorders/returns', component: <OrdersReturnsPage />},
    {path: '/mail', component: <MailPage />},
    {path: '/mail/other', component: <MailPage />},
    {path: '/mail/send', component: <MailPage />},
    {path: '/mail/replies', component: <MailPage />},
    {path: '/mail/direct', component: <MailPage />},
    {path: '/mail/automatic', component: <MailPage />},
    {path: '/settings', component: <ProfileSettingsPage />},
    {path: '/payments', component: <PaymentsPage />},
    {path: '/access-control', component: <AccessControlPage />},
    {path: '/store', component: <StorePage />},
  ]

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path="/activation/:uid/:token" component={ActivatePage} exact/>
        {
          privateRoutes.map(route => (
          <PrivateRoute exact path={route.path} key={route.path}>
            {route.component}
          </PrivateRoute>
          ))
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App


