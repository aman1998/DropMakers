import React, {useEffect, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileActionCreator } from './store/actions/profile';
import { GET_PROFILE_FAILED } from './store/actionTypes';


import 'antd/dist/antd.css';
import './assets/styles/styles.scss';

import { MainPage, DashboardPage, ActivatePage, SearchPage, NotificationsPage, OrdersPage,
        MailPage, ProfileSettingsPage, PaymentsPage, AccessControlPage, OrdersReturnsPage,
        StorePage, InventoryPage, InventorySettingsPage, InventoryChangesPage, ExporteBayPage,
        ExportOrdersPage, InventoryBrandsPage, InventoryListsPage } from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';


const App = () => {
  const {isLog, theme} = useSelector( state => ({
    isLog: state.profile.isLog,
    theme: state.themeSwitcher.theme
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      dispatch(handleProfileActionCreator())
    }
    else dispatch({ type: GET_PROFILE_FAILED })
  }, [isLog, dispatch])

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
    {path: '/myinventory', component: <InventoryPage />},
    {path: '/myinventory/settings', component: <InventorySettingsPage />},
    {path: '/myinventory/changes', component: <InventoryChangesPage />},
    {path: '/myinventory/export/amazon', component: <ExporteBayPage from='Amazon' to='eBay' />},
    {path: '/myinventory/export/eBay', component: <ExporteBayPage from='eBay' to='Amazon' />},
    {path: '/myinventory/export/orders', component: <ExportOrdersPage />},
    {path: '/myinventory/brands', component: <InventoryBrandsPage />},
    {path: '/myinventory/whitelists', component: <InventoryListsPage title='White' />},
    {path: '/myinventory/blacklists', component: <InventoryListsPage title='Black' />},
  ]

  return (
    <BrowserRouter>
      <Suspense
        fallback={<div className={`fallback ${theme === 'dark' ? 'fallback-dark' : 'fallback-light'}`}></div>}
      >
        <Switch>
          <Route path="/activation/:uid/:token" component={ActivatePage} exact/>
          {
            privateRoutes.map(route => (
            <PrivateRoute exact path={route.path} key={route.path}>
              {route.component}
            </PrivateRoute>
            ))
          }
        </Switch>
      </Suspense>
      <Suspense
        fallback={<div className={`fallback ${theme === 'dark' ? 'fallback-dark' : 'fallback-light'}`}>Добро пожаловать в DropMakers</div>}
      >
        <Switch>
          <Route path='/' component={MainPage} exact/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App


