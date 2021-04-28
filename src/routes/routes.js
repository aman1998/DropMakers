import React from 'react';

// Routes
export const MainPage = React.lazy(() => import('../pages/MainPage'));
export const DashboardPage = React.lazy(() => import('../pages/DashboardPage'));
export const ActivatePage = React.lazy(() => import('../pages/ActivatePage'));
export const SearchPage = React.lazy(() => import('../pages/SearchPage'));
export const NotificationsPage = React.lazy(() => import('../pages/NotificationsPage'));
export const OrdersPage = React.lazy(() => import('../pages/OrdersPage'));
export const OrdersReturnsPage = React.lazy(() => import('../pages/OrdersReturnsPage'));
export const ProfileSettingsPage = React.lazy(() => import('../pages/ProfileSettingsPage'));
export const MailPage = React.lazy(() => import('../pages/MailPage'));
export const PaymentsPage = React.lazy(() => import('../pages/PaymentsPage'));
export const AccessControlPage = React.lazy(() => import('../pages/AccessControlPage'));
export const StorePage = React.lazy(() => import('../pages/StorePage'));
export const InventoryPage = React.lazy(() => import('../pages/InventoryPage'));
export const InventorySettingsPage = React.lazy(() => import('../pages/InventorySettingsPage'));
export const InventoryChangesPage = React.lazy(() => import('../pages/InventoryChangesPage'));
export const InventoryBrandsPage = React.lazy(() => import('../pages/InventoryBrandsPage'));
export const InventoryListsPage = React.lazy(() => import('../pages/InventoryListsPage'));
export const ExporteBayPage = React.lazy(() => import('../pages/ExporteBayPage'));
export const ExportOrdersPage = React.lazy(() => import('../pages/ExportOrdersPage'));