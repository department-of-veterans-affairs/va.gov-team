import React from 'react';

import authProvider, { AUTHORIZATION_TYPES } from '../auth';

const POARequestsPage = () => {
  return (
    <div>
      <h2>POA Requests</h2>
    </div>
  );
};

POARequestsPage.loader = () => {
  switch (authProvider.user?.authorizationType) {
    case undefined:
      const params = new URLSearchParams();
      params.set('from', new URL(request.url).pathname);
      return redirect('/login?' + params.toString());

    case AUTHORIZATION_TYPES.NONE:
      throw json('Not Found', { status: 404 });

    case AUTHORIZATION_TYPES.BASIC:
      throw json('Forbidden', { status: 403 });
  }
};

export default POARequestsPage;
