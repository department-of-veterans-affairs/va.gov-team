import React from 'react';

import Layout from './containers/Layout';
import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import Form21aPage from './containers/Form21aPage';
import POARequestsPage from './containers/POARequestsPage';

const routes = [
  {
    id: 'root',
    path: '/',
    Component: Layout,
    loader: Layout.loader,
    children: [
      {
        ErrorBoundary: Layout.ErrorBoundary,
        children: [
          {
            index: true,
            Component: LandingPage,
          },
          {
            path: 'login',
            Component: LoginPage,
            loader: LoginPage.loader,
            action: LoginPage.action,
          },
          {
            path: '21a',
            Component: Form21aPage,
            loader: Form21aPage.loader,
          },
          {
            path: 'poa-requests',
            Component: POARequestsPage,
            loader: POARequestsPage.loader,
          },
        ],
      }
    ]
  },
  {
    path: '/logout',
    async action() {
      await authProvider.signout();
      return redirect('/');
    },
  },
];

export default routes;
