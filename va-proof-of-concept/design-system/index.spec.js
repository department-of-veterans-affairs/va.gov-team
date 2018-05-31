import 'axe-core';
import './lib/testing/enzyme-setup.js';

const testsContext = require.context('./src', true, /\.spec\.js[x]{0,1}$/);
testsContext.keys().forEach(testsContext);
