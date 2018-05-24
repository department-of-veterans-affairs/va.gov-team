import React from 'react';

import '../../platform/polyfills';
import startApp from '../../platform/startup';
import VerifyApp from './containers/VerifyApp';

startApp({ component: <VerifyApp/> });
