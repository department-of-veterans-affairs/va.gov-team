import React from 'react';
import { useRouteLoaderData, useRouteError, Outlet, Link } from 'react-router-dom';

import authProvider, { AUTHORIZATION_TYPES } from '../auth';

const Layout = () => {
  const { user } = useRouteLoaderData('root');

  return (
    <div>
      <h1>Accredited Representative Portal</h1>
      <HeaderNav user={user} />
      <Outlet />
    </div>
  );
};

const HeaderNav = ({ user }) => {
  switch (user?.authorizationType) {
    case undefined:
      return (
        <div>
          <ul>
            <li><Link to='21a'>21a</Link></li>
          </ul>
          <ul>
            <li><Link to='login'>Log in</Link></li>
          </ul>
        </div>
      );

    case AUTHORIZATION_TYPES.NONE:
      return (
        <div>
          <ul>
            <li><Link to='21a'>21a</Link></li>
          </ul>
          <ul>
            <li>{user.name}</li>
            <li><Link to='logout'>Log out</Link></li>
          </ul>
        </div>
      );

    case AUTHORIZATION_TYPES.BASIC:
    case AUTHORIZATION_TYPES.FULL:
      return (
        <div>
          <ul>
            <li><Link to='poa-requests'>POA Requests</Link></li>
          </ul>
          <ul>
            <li>{user.name}</li>
            <li><Link to='logout'>Log out</Link></li>
          </ul>
        </div>
      );
  }
};

Layout.ErrorBoundary = () => {
  const error = useRouteError();
  return <p>{error.data}</p>;
};

Layout.loader = () => {
  return { user: authProvider.user };
};

export default Layout;
