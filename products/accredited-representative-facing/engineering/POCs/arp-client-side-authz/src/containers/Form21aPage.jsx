import React from 'react';
import { useLocation, useRouteLoaderData } from 'react-router-dom';

import authProvider, { AUTHORIZATION_TYPES } from '../auth';

const Form21aPage = () => {
  const { user } = useRouteLoaderData('root');

  return (
    <div>
      <h2>Form 21a</h2>
      {getContent(user?.authorizationType)}
    </div>
  );
};

const getContent = (authorizationType) => {
  const { pathname } = useLocation();

  switch (authorizationType) {
    case undefined:
      const params = new URLSearchParams();
      params.set('from', pathname);
      const to = '/login?' + params.toString();
      return <Link to={to}>Sign in</Link>;

    case AUTHORIZATION_TYPES.NONE:
      return <Link>Start form</Link>;
  }
};

Form21aPage.loader = () => {
  switch (authProvider.user?.authorizationType) {
    case AUTHORIZATION_TYPES.BASIC:
    case AUTHORIZATION_TYPES.FULL:
      throw json('Not Found', { status: 404 });
  }
};

export default Form21aPage;
