import '../../platform/polyfills';
import './sass/user-profile.scss';
import React from 'react';

import startApp from '../../platform/startup';

import UserProfileApp from './containers/UserProfileApp';
import manifest from './manifest.json';

startApp({
  url: manifest.rootUrl,
  component: <UserProfileApp/>
});
