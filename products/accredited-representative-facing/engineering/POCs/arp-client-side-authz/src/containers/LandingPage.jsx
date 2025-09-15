import React from 'react';
import { useRouteLoaderData, Link } from 'react-router-dom';

import { AUTHORIZATION_TYPES } from '../auth';

const LandingPage = () => {
  const { user } = useRouteLoaderData('root');

  switch (user?.authorizationType) {
    case undefined:
      return (
        <div>
          <h2>Welcome!</h2>
          <p><Link to='login'>Log in.</Link></p>
          <p>Or <Link to='21a'>fill out a 21a.</Link></p>
        </div>
      );

    case AUTHORIZATION_TYPES.NONE:
      return (
        <div>
          <h2>Welcome {user.name}!</h2>
          <p><Link to='21a'>Fill out a 21a.</Link></p>
        </div>
      );

    case AUTHORIZATION_TYPES.BASIC:
    case AUTHORIZATION_TYPES.FULL:
      return (
        <div>
          <h2>Welcome {user.name}!</h2>
          <p><Link to='poa-requests'>Check out your POA requests.</Link></p>
        </div>
      );
  }
};

export default LandingPage;
